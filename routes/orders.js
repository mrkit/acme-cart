const router = require('express').Router();

const models = require('../models').models;
const Order = models.Order;

router.get('/', (req, res, next) => {
  console.log('THIS IS IT', id, 'BODYYY', body);
  res.render('index');
});

router.put('/:id', (req, res, next) => {
  let id = req.params.id
  let body = req.params.body;
  
  Order.updateFromRequestBody(id, body)
    .then( () => res.redirect('/'))
      .catch( err => {
        if(err.message === 'address required'){
          return res.render('error', {error: err})
        }
     })
});

router.post('/:id/lineItems', (req, res, next) => {
  let id = req.params.id
  let body = req.params.body;
  
  Order.addProductToCart(req.body.productId*1)
  .then( () => res.redirect('/'))
  .catch(next);
});

router.delete('/:orderId/lineItems/:id', (req, res, next) => {
  Order.destroyLineItem(req.params.orderId, req.params.id)
  .then( () => res.redirect('/'))
  .catch(next);
});

module.exports = router