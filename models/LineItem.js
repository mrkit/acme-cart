const Sequelize = require('sequelize');
const db = require('./_db');

const LineItem = db.define('line_item', {
  quantity: Sequelize.INTEGER
});

module.exports = LineItem;