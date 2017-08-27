const Sequelize = require('sequelize');
const db = require('./_db');

const Product = db.define('product', {
  name: Sequelize.STRING
});

module.exports = Sequelize;