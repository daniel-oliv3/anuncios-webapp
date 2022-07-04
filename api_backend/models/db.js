const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('imersao_sete', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

/* Teste de conexão /
/*sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(function(err){
    console.log("Erro: Conexão com o banco de dados não foi realizada!");
}); */

module.exports = sequelize;