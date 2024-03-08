const Order = require('../controllers/OrderController.js');

const router = require('express').Router();

// @route    GET /Order
router.get('/', Order.getOrders);

// @route    GET /Order/:id
router.get('/:id', Order.getOrder);

// @route    POST /Order
router.post('/', Order.createOrder);

// @route    PUT /Order/:id
router.put('/:id', Order.updateOrder);

// @route    DELETE /Order/:id
router.delete('/:id', Order.deleteOrder);

module.exports = router;
