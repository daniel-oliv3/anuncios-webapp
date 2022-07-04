## 1 - Como criar o back-end com Node.js e MySQL
#### COMO RODAR O PROJETO BAIXADO.
#### Instalar todas as dependencias indicada pelo package.json.
- npm install

## SEQUENCIA PARA CRIAR O PROJETO.
#### Criar o arquivo package.
- npm init  

## Gerencia as requisições, rotas e URLs, entre outras funcionalidades.
- Site - https://www.npmjs.com/package/express
- npm install express

## Rodar o projeto.
- node app.js

## Acessar o projeto no navegador.
- http://localhost:8080/

## Instalar o módulo para reiniciar o servidor sempre que houver alteração no codigo fonte, g siginifica globalmente.
- Site - https://www.npmjs.com/package/nodemon
- npm install -g nodemon

## Rodar o projeto usando o nodemon
- nodemon app.js

## Sequilize e uma biblioteca javascript que facilita o gerenciamento de banco de dados SQL.
- Site - https://www.npmjs.com/package/sequelize
- npm install --save sequelize

## Instalando o driver do banco de dados. 
- npm install --save mysql2

## Instalar o Workbench
- Site - https://dev.mysql.com/downloads/workbench/

## Criar a base de dados
- CREATE DATABASE imersao_sete CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

#### Comando SQL para utilizar a tabela no Workbench
- USE imersao_sete;

## Insomnia, para simular requisições externas
- Site - https://insomnia.rest/download

## Erro: Resolvendo erro
- Erro - ERR_PACKAGE_PATH_NOT_EXPORTED

#### Solução ...
- npm update

- npm install