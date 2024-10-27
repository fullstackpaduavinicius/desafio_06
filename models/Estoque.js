const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produto = require('./Produto'); // Certifique-se de que o caminho está correto

const Estoque = sequelize.define('Estoque', {
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0 // Inicialmente, pode ser 0
  }
});

// Relacionamento com Produto
Estoque.belongsTo(Produto);

module.exports = Estoque;
