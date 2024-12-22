# Conversão de valores

Projeto que converte real para outras moedas.

## Criando o ambiente virtual

```
python3 -m venv p_env && source p_env/bin/activate
```

## Instalação das dependências

```
pip3 install -r sources/requirements.txt
```

## Flask Run

```
flask --app main.py --debug run
```

## Teste de conversão

Teste com valor original aleatorio:

```
curl http://127.0.0.1:er?valor_orig=$(echo $RANDOM)
```