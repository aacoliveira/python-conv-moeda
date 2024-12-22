from flask import Flask, request
import time,random

app = Flask(__name__)

G_FATOR_REAL_DOLAR = 6.25
G_FATOR_REAL_EURO = 6.38

@app.route('/converter', methods=['GET'])
def converter():
    
    valor_orig = request.args.get("valor_orig")
    valor_euro = round(float(valor_orig) / G_FATOR_REAL_EURO, 3)
    valor_dolar = round(float(valor_orig) / G_FATOR_REAL_DOLAR ,3)

    return '''
                <h1> Valor em Real :: {} </h1>,
                <h1> Valor em Euro :: {} </h1>,
                <h1> Valor em Dólar : {} </h1>,
            '''.format(valor_orig, valor_euro, valor_dolar)

if __name__ == '__main__':
    app.run()