const Waiter = require('../controllers/WaiterController.js');

const router = require('express').Router();

// @route    GET /Waiter
router.get('/', Waiter.getWaiters);

// @route    GET /Waiter/:id
router.get('/:id', Waiter.getWaiter);

// @route    POST /Waiter
router.post('/', Waiter.createWaiter);

// @route    PUT /Waiter/:id
router.put('/:id', Waiter.updateWaiter);

// @route    DELETE /Waiter/:id
router.delete('/:id', Waiter.deleteWaiter);

module.exports = router;
