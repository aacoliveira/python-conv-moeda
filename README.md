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

```
curl -v http://127.0.0erter?valor_orig=10.0
```