const Sequelize = require('sequelize');
const db = require('./_db');

const Order = db.define('order', {
  isCart: Sequelize.BOOLEAN,
  address: Sequelize.STRING
});

module.exports = Order;