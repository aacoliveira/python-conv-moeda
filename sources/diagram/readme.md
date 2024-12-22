## Geração da imagem

Para gerar o png:

```
docker container run --rm -it -v $(pwd)/sources:/sources python:3.13 bash -c 'apt-get update && apt-get install graphviz -y && cd /sources && pip3 install -r requirements.txt && cd diagram && python3 diagram.py'
```