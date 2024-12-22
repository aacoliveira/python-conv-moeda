from flask import Flask, request
import time,random

app = Flask(__name__)

G_FATOR_REAL_DOLAR = 6.25
G_FATOR_REAL_EURO = 6.38

def get_conversao(valor_orig, fator):
    return round(float(valor_orig) / fator, 3)

@app.route('/converter', methods=['GET'])
def converter():
    
    valor_orig = request.args.get("valor_orig")
    valor_euro = get_conversao(valor_orig, G_FATOR_REAL_EURO)
    valor_dolar = get_conversao(valor_orig, G_FATOR_REAL_DOLAR)

    return '''
                <h1> Valor em Real :: {} </h1>,
                <h1> Valor em Euro :: {} </h1>,
                <h1> Valor em Dólar : {} </h1>,
            '''.format(valor_orig, valor_euro, valor_dolar)

if __name__ == '__main__':
    app.run()