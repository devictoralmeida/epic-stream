<div align="center">
    <img src="./src/assets/epic-stream-logo1.png" alt="Epic Stream Logo" />
</div>

# Projeto Epic Stream

Esse projeto se trata de uma aplicação Front-end desenvolvida em angular cujo objetivo é simular uma plataforma de streaming

## 💻 Instalação, Dependências e Executando o Projeto

Para rodar esse projeto é preciso ter o `Node.js` instalado, recomendo a versão LTS (> 20), e o seu gerenciador de pacote favorito na versão mais atual.

### Rodando a aplicação localmente

1. Será necessário instalar a CLI do Angular

```shell
npm install -g @angular/cli
ou
yarn global add @angular/cli
```

2. Clone este repositório

```shell
git clone git@github.com:devictoralmeida/epic-stream.git
```

3. Vá até o diretório raiz do projeto

```shell
cd epic-stream
```

4. Instale as dependências necessárias

```shell
yarn
ou
npm install
```

5. Você irá precisar se cadastrar e receber a sua API_KEY e API_TOKEN no <a href="https://developer.themoviedb.org/docs">Site do TMDB</a>

6. Utilize a tipagem do arquivo "src/environments/environment.example.ts" como modelo para criação dos ambientes de desenvolvimento e de produção, Você deve criar um arquivo environment.prod.ts e environment.development.ts setando as respectivas variáveis de ambientes explicadas no environment.example.

7. Execute a aplicação

```shell
ng serve
# O servidor será executado na porta 4200 (http://localhost:4200)
```

## Rodando a aplicação com docker

Basta utilizar o comando abaixo e depois acessar a url `http://localhost:8099`
```shell
docker-compose up -d
```
