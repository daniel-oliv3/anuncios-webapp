const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Olá, Munso! Sapup3 na Área!');
});

app.listen(3000);