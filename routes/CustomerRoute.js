const Customer = require('../controllers/CustomerController.js');

const router = require('express').Router();

// @route    GET /customers
/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Get all customers
 *     responses:
 *       200:  
 *         description: Success
*/

router.get('/', Customer.getCustomers);

// @route    GET /Customer/:id
router.get('/:id', Customer.getCustomer);

// @route    POST /Customer
router.post('/', Customer.createCustomer);

// @route    PUT /Customer/:id
router.put('/:id', Customer.updateCustomer);

// @route    DELETE /Customer/:id
router.delete('/:id', Customer.deleteCustomer);

module.exports = router;
