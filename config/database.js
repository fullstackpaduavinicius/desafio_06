const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // caminho do arquivo do banco de dados
});

module.exports = sequelize;
