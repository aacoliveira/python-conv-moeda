#https://hub.docker.com/_/python
FROM python:3.14.0a5-alpine

WORKDIR /python-conv-moeda

COPY    sources/requirements.txt /python-conv-moeda

RUN     pip3 install --upgrade pip && \
        pip3 install --no-cache-dir -r requirements.txt

RUN     rm -f requirements.txt        

COPY    sources/main.py /python-conv-moeda        

EXPOSE  5000

CMD ["flask", "--app", "main.py", "--debug", "run", "--host", "0.0.0.0"]