const Sequelize = require('sequelize');
const db = require('./_db');

const Order = db.define('order', {
  isCart: Sequelize.BOOLEAN,
  address: Sequelize.STRING
});

//figure out if this should be a getter, classmethod or instance afterwards
Order.updateFromRequestBody = function (id, data) {
  //what is the id? and req.body? 
  Order.update({})
}

Order.addProductToCart = function(id){
  Order.create()
}

Order.destroyLineItem = function(orderId, id){
  
}
module.exports = Order;