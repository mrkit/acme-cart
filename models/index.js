const db = require('./_db');

const Order = require('./Order');
const Product = require('./Product');
const LineItem = require('./LineItem');

LineItem.belongsTo(Order);
LineItem.belongsTo(Product);
Order.hasMany(Product);
Product.belongsTo(Order);

const models = { Order, Product, LineItem};

const sync = () => db.sync({ forced: true });

module.exports = { sync, models};