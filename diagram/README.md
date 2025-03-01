## PNG

### Para gerar o png que representa a aplicação:

```bash
docker container run --rm -it -v $(pwd):/tmp/png python:3.13 \
bash -c '
cd /tmp/png && \
apt-get update && apt-get install graphviz -y && \
pip3 install -r requirements.txt && \
python3 diagram.py'
```