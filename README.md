# Conversão de valores

Projeto que converte real para outras moedas.

## 1 - Local Run

### 1.1 - Criando o ambiente virtual

```
python3 -m venv p_env && source p_env/bin/activate
```

### 1.2 - Instalação das dependências

```
pip3 install -r sources/requirements.txt
```

### 1.3 - Flask

```
flask --app sources/main.py --debug run
```

## 2 - Docker Run

### 2.1 - Geração da imagem docker

```bash
docker build -t python-conv-moeda:rc-local .
```

### 2.2 - Execução do container

```bash
docker container run -d --rm -p 5000:5000 --name py-conv-moeda python-conv-moeda:rc-local
```

### 2.3 - Logs do container criado

```bash
docker container stop py-conv-moeda
```

### 2.4 - Remoção do container criado

```bash
docker container stop py-conv-moeda
```

## 3 - Teste de conversão

### 3.1 - Teste com valor aleatorio:

```
curl http://localhost:5000/converter?valor_orig=$(echo $RANDOM)
```

### 3.2 - Exibiindo as métricas

```
curl http://localhost:5000/metrics
```

## 4 - Fluxo

![curl](diagram/fluxo.png)
