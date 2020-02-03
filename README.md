# bootcamp-gostack-desafio-02
Desafio do segundo módulo do Bootcamp GoStack

Criar pasta do projeto
<mkdir desafio02>

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

Estrutuar as pastas do projeto
<mkdir ./src/>
<touch ./src/app.js>
<touch ./src/server.js>
<touch ./src/routes.js>