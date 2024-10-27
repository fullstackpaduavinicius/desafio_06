// models/index.js
const { Sequelize } = require('sequelize');
const Produto = require('./produtos');
const Cliente = require('./clientes');

// Configuração do banco de dados (ajuste conforme necessário)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // Ajuste conforme necessário
});

// Sincronizar os modelos com o banco de dados
const syncModels = async () => {
    await sequelize.sync();
    console.log('Modelos sincronizados com o banco de dados');
};

syncModels();

module.exports = {
    sequelize,
    Produto,
    Cliente
};
