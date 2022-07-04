const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('imersao_sete', 'root', '', {
    host: 'localhost',
    dialect: 'mysql2'
});

module.exports = sequelize;