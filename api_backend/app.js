const express = require('express');
//const { json } = require('sequelize');
const app = express();

app.use(express.json());

const Anuncio = require('./models/Anuncio');

//const db = require("./models/db");

app.get('/', function (req, res) {
  res.send('Olá, Mundo! Sapup3 na Área!');
});

app.post('/cadastrar', async (req, res) => {
  const resultCad = await Anuncio.create(
    req.body
  ).then(function(){
    res.send('Anúncio cadastrado com sucesso!');
  }).catch(function(erro){
    res.send('Erro: Anúncio não foi cadastrado!');
  });
});

app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});