const express = require('express');
const app = express();

const Anuncio = require('./models/Anuncio');

//const db = require("./models/db");

app.get('/', function (req, res) {
  res.send('Olá, Munso! Sapup3 na Área!');
});

app.get('/cadastrar', async (req, res) => {
  const resultCad = await Anuncio.create({
    titulo: 'Pedreiro da fundação, elétrica, hidráulica, etc...',
    descricao: 'Trabalho da fundação á entraga da chave. Faço orçamento sem compromisso.'
  });
});

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});