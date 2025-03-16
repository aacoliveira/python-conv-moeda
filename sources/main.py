from flask import Flask, request
from prometheus_client import generate_latest, CONTENT_TYPE_LATEST
from config import configurar_metricas
from utils import get_conversao

G_FATOR_REAL_DOLAR = 6.25
G_FATOR_REAL_EURO = 6.38

def criar_app():
    app = Flask(__name__)
    registry, http_requests_total = configurar_metricas()

    @app.route('/metrics')
    def metrics():
        """Expõe as métricas em um formato compatível com o Prometheus."""
        return generate_latest(registry), 200, {'Content-Type': CONTENT_TYPE_LATEST}

    @app.route('/converter', methods=['GET'])
    def converter():
        """Converte o valor recebido para EURO e US DOLAR com base no fator correspondente à moeda."""
        http_requests_total.labels(status=200, path=request.path, method=request.method).inc()
        valor_orig = request.args.get("valor_orig")
        valor_euro = get_conversao(valor_orig, G_FATOR_REAL_EURO)
        valor_dolar = get_conversao(valor_orig, G_FATOR_REAL_DOLAR)

        return '''
                    <h1> Valor em Real :: {} </h1>,
                    <h1> Valor em Euro :: {} </h1>,
                    <h1> Valor em Dólar :: {} </h1>,
                '''.format(valor_orig, valor_euro, valor_dolar)

    return app

if __name__ == '__main__':
    app = criar_app()
    app.run()