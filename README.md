# thorpe-innovation-imersao
Esse software tem a função de Cadastrar pessoas, fazer login com autenticação e pode cadastra e remover suas atividades a serem realizadas.

## Backend

### Lista de programas que deve conter na sua máquina.
1. [NodeJs](https://nodejs.org/en/)
2. [MongoDB - versão: 3.4.20](https://www.mongodb.com/dr/fastdl.mongodb.org/win32/mongodb-win32-x86_64-2008plus-3.4.20-signed.msi/download)

### Comandos para instalar as dependencias antes de executar o código fonte.
1. Abra o prompt de comandos.
2. Acesse a pasta onde você fez o clone do projeto pelo prompt de comandos.
3. Após acessar, digite o comando: "npm install"
4. Após npm install, execute o comando _npm install -g typescript_ para adicionar o Typescript de forma global no projeto.

Com isso todas as dependencias que o projeto esta utilizando serão instaladas e você conseguirar executar o codigo fonte sem problemas.

### Comandos para Deixar o Backend da Aplicação executando.
Será realizado 3 etapas, primeiro deixaremos o TypeScript em modo Watch, onde ele ficará ouvindo os arquivos modificados, depois inicializaremos o nodemon para levantar o backend do nodeJS. Então por fim inicializaremos o banco de dados mongoDB e carregaremos o script de insert dos cursos.

#### Passo 1 : TypeScript em modo Watch
1. Abra um prompt de comando na pasta _backend_ do projeto que você realizou o clone.
2. Digite o comando _tsc -w_, pronto isso deixará o TypeScript em modo watch.

#### Passo 2 : Iniciano o Nodemon
1. Abra um prompt de comando na pasta _backend_ do projeto que você realizou o clone.
2. Digite o comando _nodemon dist/main.js_, pronto isso inicializará o nodemon também em modo watch.

#### Passo 3 : Inicializando o MongoDB
1. Abra um prompt de comandos.
2. Acesse a pasta bin do mongodb onde você instalou na sua maquina.
2. Digite o comando: _mongod_ isso iniciara o banco.

## Frontend

### Comandos para instalar as dependencias antes de executar o código fonte.
1. Abra o prompt de comandos.
2. Acesse a pasta frontend do projeto onde você salvou o clone do projeto.
3. Execute o comando: _npm install_ isso instalará todas as dependencias que a aplicação do frontend precisa.
4. Execute o comando: _npm start_ isso iniciará a aplicação frontend.
5. Abra o seu navegador padrão acesse a URL: http://localhost:3000