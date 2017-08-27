const db = require('./_db');

db.authenticate().catch(err => console.log(err.message));

const Order = require('./Order');
const Product = require('./Product');
const LineItem = require('./LineItem');

LineItem.belongsTo(Order);
LineItem.belongsTo(Product);
Order.hasMany(Product);
Product.belongsTo(Order);

const models = { Order, Product, LineItem};

Order.create({isCart: true, address: 'butter pecan'})

const sync = () => db.sync({ forced: true });

module.exports = { sync, models};