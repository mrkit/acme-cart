const router = require('express').Router();

const models = require('../models').models;
const Product = models.Product;

router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router