const express = require('express'); // essa variaável contem todas as dependencias da aplicação
const cors = require('cors');
const routes = require('./routes'); // importando o arquivo de rotas no index

//iniciar "armazenar" minha aplicação
const app = express();

app.use(cors());
app.use(express.json()); // informar para o express que o corpo das requisições vem em formato json
app.use(routes); // mandando meu app usar o routes

app.listen(3333); // minha porta pro node
