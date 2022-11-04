# lab365-base-project

Esse é o projeto utilizado como base para a disciplina de Testes com Vue JS, turma [DEVin] ConectaNuvem, ofertado pelo Lab365 - SENAI

Tutor: Matheus Vinícius Valenza

## Requisitos

Você precisa ter instalado em sua máquina o [node](https://nodejs.org/en/download/) e o [npm](https://rockcontent.com/br/blog/npm/)

Como testar se já tenho instalado?

```
node -v
```

```
npm -v
```

## Clone do projeto

```
git clone https://github.com/mathvalenza/lab365-base-project.git
```

## Setup do projeto

```
npm install
```

### Rodando o projeto (com este comando, você terá o projeto rodando em `http://localhost:8080`)

```
npm run serve
```

### Rodando testes unitários

```
npm run test:unit
```

### Rodando testes End to End

```
npm run test:e2e
```

### Utilizando o mock de API

Instalar o json-server
```
npm install -g json-server
``` 

Rodar o json-server

```
json-server --watch db.json
```

Agora, o conteúdo do arquivo `db.json` estará disponível como uma api em `http://localhost:3000`

Exemplo: `http://localhost:3000/items`
