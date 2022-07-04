const express = require('express');
const cors = require('cors');
const app = express();
const Anuncio = require('./models/Anuncio');
//const db = require("./models/db");

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
});



app.get('/', async (req, res) => {
  await Anuncio.findAll({order: [['id', 'DESC']]}).then(function(anuncios){
    res.json({anuncios});
  });
});

/* Visualizar */
app.get('/visualizar/:id', async (req, res) => {
  await Anuncio.findByPk(req.params.id)
  .then(anuncio => {
    return res.json({
      error: false,
      anuncio
    })
  }).catch(function(erro){
    return res.status(400).json({
      error: true,
      message: "Erro: Anúncio não encontrado" 
    });
  });
});


/* Cadastrar */
app.post('/cadastrar', async (req, res) => {
  const resultCad = await Anuncio.create(
    req.body
  ).then(function(){
    return res.json({
      error: false,
      message: "Anúncio cadastrado com sucesso!" 
    });
  }).catch(function(erro){
    return res.status(400).json({
      error: true,
      message: "Erro: Anúncio não foi cadastrado!" 
    });
  });
});


/* Editar */
app.put('/editar', async (req, res) => {
  await Anuncio.update(req.body, {
    where: {id: req.body.id}
  }).then(function() {
    return res.json({
      error: false,
      message: "Anúncio editado com sucesso!"
    });
  }).catch(function(erro){
    return res.status(400).json({
      error: false,
      message: "Erro> Anúncio não foi editado!"
    });
  });
});


/* Apagar */
app.delete('/apagar/:id', async (req, res) => {
  await Anuncio.destroy({
    where: {id: req.params.id}
  }).then(function() {
    return res.json({
      error: false,
      message: "Anúncio apagado com sucesso!"
    });
  }).catch(function(erro){
    return res.status(400).json({
      error: false,
      message: "Erro> Anúncio não foi apagado!"
    });
  });
});



app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});