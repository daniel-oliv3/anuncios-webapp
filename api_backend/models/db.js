const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('imersao_sete', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso!");
})

module.exports = sequelize;