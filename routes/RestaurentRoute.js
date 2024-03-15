const Restaurent = require('../controllers/RestaurentController.js');

const router = require('express').Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Chief:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         picture:
 *           type: string
 *         kitchenStaffs:
 *           type: object
 *           properties:
 *             kitchenStaffs:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/KitchenStaff'
 *         ordersToFullfill:
 *           type: object
 *           properties:
 *             ordersToFullfill:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *     Customer:
 *       type: object
 *       properties:
 *         order:
 *           type: string
 *           format: ObjectId
 *           description: Reference to an Order
 *         isComplain:
 *           type: boolean
 *     KitchenStaff:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         ordersToFullfill:
 *           type: object
 *           properties:
 *             ordersToFullfill:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *     Manager:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *     Meal:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         picture:
 *           type: string
 *         price:
 *           type: number
 *         ingredients:
 *           type: array
 *           items:
 *             type: string
 *         category:
 *           type: string
 *     Menu:
 *       type: object
 *       properties:
 *         meals:
 *           type: object
 *           properties:
 *             meals:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Meal'
 *     Order:
 *       type: object
 *       properties:
 *         orderItems:
 *           type: object
 *           properties:
 *             orderItems:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderItem'
 *         totalPrice:
 *           type: number
 *     OrderItem:
 *       type: object
 *       properties:
 *         meal:
 *           type: string
 *           format: ObjectId
 *           description: Reference to a Meal
 *         quantity:
 *           type: number
 *         price:
 *           type: number
 *     Restaurent:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         manager:
 *           type: string
 *           format: ObjectId
 *           description: Reference to a Manager
 *         menu:
 *           type: string
 *           format: ObjectId
 *           description: Reference to a Menu
 *         staff:
 *           type: string
 *           format: ObjectId
 *           description: Reference to a Staff
 *         customers:
 *           type: object
 *           properties:
 *             customers:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 *     Staff:
 *       type: object
 *       properties:
 *         chief:
 *           type: string
 *           format: ObjectId
 *           description: Reference to a Chief
 *         waiters:
 *           type: object
 *           properties:
 *             waiters:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Waiter'
 *     Waiter:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         picture:
 *           type: string
 *         customersToServe:
 *           type: object
 *           properties:
 *             customersToServe:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */



/**
 * @swagger
 * tags:
 *   name: Restaurent
 *   description: Operations related to restaurants
 * 
 * /restaurents:
 *   get:
 *     summary: Get all restaurants
 *     tags: [Restaurent]
 *     responses:
 *       200:
 *         description: A list of restaurants
 *   post:
 *     summary: Create a new restaurant
 *     tags: [Restaurent]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurent'
 *     responses:
 *       200:
 *         description: Successfully created a restaurant
 * /restaurents/{id}:
 *   get:
 *     summary: Get a restaurant by ID
 *     tags: [Restaurent]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant to get
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A restaurant object
 *       404:
 *         description: Restaurant not found
 *   put:
 *     summary: Update a restaurant by ID
 *     tags: [Restaurent]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurent'
 *     responses:
 *       200:
 *         description: Successfully updated the restaurant
 *       404:
 *         description: Restaurant not found
 *   delete:
 *     summary: Delete a restaurant by ID
 *     tags: [Restaurent]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the restaurant to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Restaurant deleted successfully
 *       404:
 *         description: Restaurant not found
 */



// @route    GET /restaurents
router.get('/', Restaurent.getRestaurents);

// @route    GET /restaurents/:id
router.get('/:id', Restaurent.getRestaurentById);

// @route    POST /restaurents
router.post('/', Restaurent.createRestaurent);

// @route    PUT /restaurents/:id
router.put('/:id', Restaurent.updateRestaurent);

// @route    DELETE /restaurents/:id
router.delete('/:id', Restaurent.deleteRestaurent);

module.exports = router;
