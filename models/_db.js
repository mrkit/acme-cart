const Sequelize = require('sequelize');
const db = new Sequelize(/*process.env.DATABASE_URL*/'postgres://localhost/acme-cart-db', { logging: false })

module.exports = db;