# Desafio 1 NestJS - Imersão Full Stack && Full Cycle

<hr>

<img src="https://camo.githubusercontent.com/6b7f701cf0bea42833751b754688f1a27b6090fdf90bf2b226addff01be817f0/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646f636b65722d2532333064623765642e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465" /> <img src="https://camo.githubusercontent.com/8855980a487f9e31426fbfc2cbbfdda5aa3b7f1d390e262e652e639e911b3d87/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6573746a732d2532334530323334452e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6573746a73266c6f676f436f6c6f723d7768697465" /> <img src="https://camo.githubusercontent.com/b310667470594171440f9b80f624787ea58555296d88af177788509b0d73a40b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73716c6974652d2532333037343035652e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c697465266c6f676f436f6c6f723d7768697465" />


Informações do desafio
Neste desafio você deverá criar uma API REST que tenha dois endpoints:

```bash
GET /transactions,

POST /transactions
```

Os dados da transação serão:


* id
* type -> credit ou debit
* amount

Ao fazer o cadastro os dados deverão ser validados pelo class-validator como feito na primeira aula.


A persistência de dados deve ser feita com TypeORM e o banco de dados deverá ser o sqlite.


Monte um ambiente com Docker Compose para subir toda a aplicação, ela deverá rodar na porta 3000. Ao fazer um docker-compose up todo ambiente deverá estar pronto para só acessar http://localhost:3000/transactions


Crie uma foto de uma parte interessante do seu código usando a Extensão "Code Snap" do VSCode e salve na raiz do projeto com o nome "print.png".


# Como executar o projeto

```bash
#Baixar o repositório do projeto
git clone https://gabrielalves962008@bitbucket.org/gabrielalves962008/api-nestjs-typeorm-transactions.git

#acessando a pasta com a aplicação 
cd api-nestjs-typeorm-transactions

#inicializando o projeto no docker
docker-compose up

```
