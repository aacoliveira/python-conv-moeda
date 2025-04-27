import json
from flask import Flask, request
from flask_cors import CORS
from prometheus_client import (
    Counter, 
    platform_collector, 
    process_collector, 
    gc_collector, 
    generate_latest, 
    CONTENT_TYPE_LATEST, 
    CollectorRegistry, 
    disable_created_metrics)

app = Flask(__name__)
#CORS(app, origins=["http://localhost:8080","http://front:8080","http://localhost:3000","http://front:3000"])
#app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

G_FATOR_REAL_DOLAR = 6.25
G_FATOR_REAL_EURO = 6.38

registry = CollectorRegistry()
gc_collector.GCCollector(registry=registry)
platform_collector.PlatformCollector(registry=registry)
process_collector.ProcessCollector(registry=registry)
disable_created_metrics()

http_requests_total = Counter(
    "http_requests_total",
    "Total number of HTTP requests received",
    ["status", "path", "method"],
    registry=registry,
)

@app.route('/metrics')
def metrics():
    """Expõe as métricas em um formato compatível com o Prometheus. """
    return generate_latest(registry), 200, {'Content-Type': CONTENT_TYPE_LATEST}

def get_conversao(valor_orig, fator):
    return round(float(valor_orig) / fator, 3)

@app.route('/converter-html', methods=['GET'])
def converter_html():
    """Converte o valor recebido para EURO e US DOLAR com base no fator correspondente à moeda"""
    http_requests_total.labels(status=200, path=request.path, method=request.method).inc()
    valor_orig = request.args.get("valor_orig")
    valor_euro = get_conversao(valor_orig, G_FATOR_REAL_EURO)
    valor_dolar = get_conversao(valor_orig, G_FATOR_REAL_DOLAR)

    return '''
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Valores Monetários</title>
            </head>
            <body>
                <h1>Valor em Real :: {}</h1>
                <h1>Valor em Euro :: {}</h1>
                <h1>Valor em Dólar : {}</h1>
            </body>
            </html>
            '''.format(valor_orig, valor_euro, valor_dolar)

@app.route('/converter-json', methods=['GET'])
def converter_json():
    """Converte o valor recebido para EURO e US DOLAR com base no fator correspondente à moeda"""
    http_requests_total.labels(status=200, path=request.path, method=request.method).inc()
    valor_orig = request.args.get("valor_orig")
    valor_euro = get_conversao(valor_orig, G_FATOR_REAL_EURO)
    valor_dolar = get_conversao(valor_orig, G_FATOR_REAL_DOLAR)

    retorno_json = {
        "Valor em Real": valor_orig,
        "Valor em Euro": valor_euro,
        "Valor em Dólar": valor_dolar
    }

    return json.dumps(retorno_json, ensure_ascii=False, indent=4)

if __name__ == '__main__':
    app.run()