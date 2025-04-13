# Conversão de valores

Projeto que converte real para outras moedas.

## 1 - Fluxo

![curl](diagram/fluxo.png)

## 2 - Execução

## 2.1 - Instale o Docker e Compose de acordo com a sua plataforma

- https://docs.docker.com/engine/install/
- https://docs.docker.com/compose/install/linux/

## 2.2 - Execute o projeto com o comando:

```bash
docker compose up
```

## 3 - Teste de conversão

### 3.1 - Teste com valor aleatorio:

Retorno em json:

```
curl http://localhost:5000/converter-json?valor_orig=$(echo $RANDOM)
```

Retorno em html:

```
curl http://localhost:5000/converter-html?valor_orig=$(echo $RANDOM)
```

### 3.2 - Exibindo as métricas

```
curl http://localhost:5000/metrics
```