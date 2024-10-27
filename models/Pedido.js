const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produto = require('./Produto');
const Venda = require('./Venda');

const Pedido = sequelize.define('Pedido', {
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
});

// Relacionamentos
Pedido.belongsTo(Produto);
Pedido.belongsTo(Venda);

module.exports = Pedido;
