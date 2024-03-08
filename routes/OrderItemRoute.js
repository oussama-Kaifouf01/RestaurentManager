const OrderItem = require('../controllers/OrderItemController.js');

const router = require('express').Router();

// @route    GET /OrderItem
router.get('/', OrderItem.getOrderItems);

// @route    GET /OrderItem/:id
router.get('/:id', OrderItem.getOrderItem);

// @route    POST /OrderItem
router.post('/', OrderItem.createOrderItem);

// @route    PUT /OrderItem/:id
router.put('/:id', OrderItem.updateOrderItem);

// @route    DELETE /OrderItem/:id
router.delete('/:id', OrderItem.deleteOrderItem);

module.exports = router;
