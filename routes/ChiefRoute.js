const express = require('express');
const router = express.Router();
const Chief = require('../controllers/ChiefController.js');

/**
 * @swagger
 * tags:
 *   name: Chiefs
 *   description: API endpoints for managing chiefs
 */

/**
 * @swagger
 * /chiefs:
 *   get:
 *     summary: Retrieve all chiefs
 *     tags: [Chiefs]
 *     responses:
 *       200:
 *         description: A list of chiefs
 */
router.get('/', Chief.getChiefs);

/**
 * @swagger
 * /chiefs/{id}:
 *   get:
 *     summary: Retrieve a single chief by ID
 *     tags: [Chiefs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the chief
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single chief
 */
router.get('/:id', Chief.getChief);

/**
 * @swagger
 * /chiefs:
 *   post:
 *     summary: Create a new chief
 *     tags: [Chiefs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               picture:
 *                 type: string
 *               kitchenStaffs:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/KitchenStaff'
 *               ordersToFullfill:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Chief created successfully
 */
router.post('/', Chief.createChief);

/**
 * @swagger
 * /chiefs/{id}:
 *   put:
 *     summary: Update a chief by ID
 *     tags: [Chiefs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the chief
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               picture:
 *                 type: string
 *               kitchenStaffs:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/KitchenStaff'
 *               ordersToFullfill:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Chief updated successfully
 */
router.put('/:id', Chief.updateChief);

/**
 * @swagger
 * /chiefs/{id}:
 *   delete:
 *     summary: Delete a chief by ID
 *     tags: [Chiefs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the chief
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Chief deleted successfully
 */
router.delete('/:id', Chief.deleteChief);

module.exports = router;
