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
docker container logs py-conv-moeda
```

### 2.4 - Remoção do container criado

```bash
docker container stop py-conv-moeda
```