# Front-End

## Instalação do NPM

Comandos:

```bash
sudo apt update
sudo apt install nodejs npm -y
node -v  # Verifique a versão do Node.js
npm -v   # Verifique a versão do npm
```

## Criação do projeto

### Vite

```bash
npm create vite@latest
```

> Insere o nome do projeto
> Seleciona React 
> Javascript

Acessa o diretório:

```bash
cd front-conv-moeda
```

Instalação dos pacotes

```bash
npm i
```

## Build da imagem

```bash
docker build -t front-conv-moeda .
```

## Execução

```bash
docker run --rm -d -p 8080:3000 front-conv-moeda
```