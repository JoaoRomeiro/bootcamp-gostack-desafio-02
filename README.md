# bootcamp-gostack-desafio-02
Desafio do segundo módulo do Bootcamp GoStack

# Configuração do ambiente de desenvolvimento
Criar pasta do projeto
<mkdir desafio02>

Estrutuar as pastas do projeto
<mkdir ./src/>
<touch ./src/app.js>
<touch ./src/server.js>
<touch ./src/routes.js>
<mkdir ./src/app>
<mkdir ./src/app/controllers>
<mkdir ./src/app/middlewares>
<mkdir ./src/app/models>
<touch ./src/app/controllers/SessionController.js>
<touch ./src/app/middlewares/auth.js>
<mkdir ./src/config>
<touch ./src/config/database.js>
<mkdir ./src/database>
<mkdir ./src/database/migrations>

A partir de agora tudo será feito dentro da pasta do projeto

Iniciar versionamento
<git init>

Adicionar o repositório remoto
<git remote add origin https://github.com/JoaoRomeiro/bootcamp-gostack-desafio-02.git>

Atualizar o projeto local
<git pull origin master>

Cria o arquivo .gitignore para não rastrear certos arquivos e pastas
<touch .gitignore>

Inicar o yarn para gerenciar as dependências do projeto
<yarn init -y>

Adicionar a pasta node_modules ao .gitignore

Instalar o express, que é o framework que será utilizado no projeto
<yarn add express>

Instalar o Nodemon e o Sucrase como dependencia de desenvolvimento
- Sucrase permite utilizar a sintaxe mais moderna do JavaScript
- Nodemon monitora as alterações no servidor e o reinicializa de forma automática
<yarn add sucrase nodemon -D>

Criar o arquivo nodemon.json
<touch nodemon.json>

Configurar o arquivo nodemon.json para que antes de executar o node, registre o sucrase
{
    "execMap": {
        "js": "node - r sucrase/register"
    }
}

Editar o arquivo package.json e adicionar o script dev e dev:debug para facilitar a inicialização do node
e utilizar o debug no VS Code
"scripts": {
    "dev": "nodemon src/server.js"
    "dev:debug": "nodemon --inspect src/server.js"
}

Adicionar o arquivo launch.json através do debug do VS Code
Selecionar o opção Node.js

Dentro do arquivo launch.json realizar as seguintes alterações:
- Alterar a propriedade "request": "launch" para "request": "attach"
- Remover a propriedade "program": "${workspaceFolder}\\index.js"
- Adicionar a propriedade "protocol": "inspector"
- Adicionar a propriedade "protocol": "inspector"
- Adicionar a propriedade "restart": true

Instalar o ESLint como dependência de desenvolvimento
<yarn add eslint -D>

Inicializar o eslint
<yarn eslint --init>

Selecionar as seguintes opções
- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- None of these
- Does your project use TypeScript? (y/N) N
- Desmarcar Browse e marcar Node
- Use a popular style guide
- Airbnb: https://github.com/airbnb/javascript
- JavaScript

Excluir o arquivo package-lock.json
<rm package-lock.json>

Rodar o yarn para re-mapear as dependências no arquivo yarn.lock
<yarn>

Instalar a extensão ESLint através do VS Code

Editar o arquivo settings.json e adicionar a seguinte configuração
"eslint.enable": true,
"eslint.packageManager": "yarn",
"eslint.validate": [
    "vue",
    "html",
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
],
"[javascript]": {
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
    }
},
"[javascriptreact]": {
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
    }
},
"files.eol":"\n",

Editar o arquivo .eslintrc.js e adicionar as seguintes regras
"class-methods-use-this": "off",
"no-param-reassign": "off",
"camelcase": "off",
"no-unused-vars": ["error", {"argsIgnorePattern": "next"}]

Instalar o prettier
<yarn add prettier eslint-config-prettier eslint-plugin-prettier -D>

Editar o arquivo .eslintrc e realizar as seguintes alterações:
- Alterar a propriedade extends para extends: ['airbnb-base', 'prettier' ]
- Adicionar uma nova propriedade plugins: ['prettier']
- Adicionar um rules "prettier/prettier": "error",

Criar um arquivo .prettierrc
<touch .prettierrc>

Adicionar as excessões de validações que o prettier deve ignorar
{
    "singleQuote": true,
    "trailingComma": "es5"
}

Corrigir todos os problemas que o ESLint identificar sem a necessidade de entrar arquivo por aquivo
<yarn eslint --fix nome_da_pasta --ext .tipo_da_extensao>
<yarn eslint --fix src --ext .js>

Instalar a extensão EditorConfig for VS Code

Através do VS Code, ir até a raiz do projeto, clicar com o botão direito e selecionar Generate .editorconfig

Editar o arquivo .editorconfig e redefinir as seguintes propriedades:
- trim_trailing_whitespace = true
- insert_final_newline = true

Instalar o sequelize
<yarn add sequelize>

Instalar o sequelize-cli como dependencia de desenvolvimento
Essa dependencia permite utilizar o prompt de comando para executar comandos, como por exemplo, migrations, criar models e etc.
<yarn add sequelize-cli -D>

Criar um arquivo .sequelizerc que definirá os caminhos até os arquivos e pastas do nosso projeto
<touch .sequelizerc>

Verificar a versão do sequelize
<yarn sequelize --version>

Editar o arquivo .sequelizerc e adicionar os seguintes paramentros
const { resolve } = require('path');

module.exports = {
    config: resolve(__dirname, 'src', 'config', 'database.js'),
    'models-path': resolve(__dirname, 'src', 'app', 'models'),
    'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
    'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
}

Para ideficar os bancos que o sequelize suporta, acessar o link: https://sequelize.org/v5/manual/dialects.html

Caso o bd escolhido seja o postgres é necessário instalar as seguintes dependencias
<yarn add pg pg-hstore>

# Configuração container do postgres no Docker

IP: 192.168.99.103
<docker run --name fastfeet -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres>

Editar o arquivo config/database.js e adicionar as credenciais de conexão com o banco de dados
module.exports = {
    dialect: 'postgres',
    host: '192.168.99.103',
    username: 'postgres',
    password: 'docker',
    database: 'fastfeet',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
