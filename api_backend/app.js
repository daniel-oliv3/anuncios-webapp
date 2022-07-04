const express = require('express');
const app = express();
app.use(express.json());
const Anuncio = require('./models/Anuncio');
//const db = require("./models/db");

app.get('/', function (req, res) {
  Anuncio.findAll({order: [['id', 'DESC']]}).then(function(anuncios){
    res.json({anuncios});
  });
});

/* Visualizar */
app.get('/visualizar/:id', async (req, res) => {
  Anuncio.findByPk(req.params.id)
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
app.put('/editar', (req, res) => {
  Anuncio.update(req.body, {
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


app.listen(8080, function(){
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});