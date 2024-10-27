const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');

const Venda = sequelize.define('Venda', {
  data: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  valor_total: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

// Relacionamento com Cliente
Venda.belongsTo(Cliente);

module.exports = Venda;
