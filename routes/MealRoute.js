const Meal = require('../controllers/MealController.js');
const router = require('express').Router();

/**
 * @swagger
 * /meals:
 *   get:
 *     summary: Returns all meals
 *     tags: [Meals]
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/config/swaggerSchemas/Meal'
 */

/**
 * @swagger
 * /meals/{id}:
 *   get:
 *     summary: Get a meal by ID
 *     tags: [Meals]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/Meal'
 */


/**
* @swagger
* /meals:
*   post:
*     summary: Create a new meal
*     tags: [Meals]
*     requestBody:
*       content:
*         application/json:
*           schema:
*             $ref: '#/config/swaggerSchemas/Meal.json'
*     responses:
*       201:
*         description: Created
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Meal'
*/
/**
 * @swagger
 * /meals/{id}:
 *   put:
 *     summary: Update a meal by ID
 *     tags: [Meals]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true 
 *         description: The meal ID
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meal'
 *     responses:
 *       200:
 *         description: The updated meal
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meal'
 *       404:
 *         description: Meal not found
 *       500:
 *         description: Server error
 */

// @route    GET /Meal
router.get('/', Meal.getMeals);

// @route    GET /Meal/:id
router.get('/:id', Meal.getMealById);

// @route    POST /Meal
router.post('/', Meal.createMeal);

// @route    PUT /Meal/:id
router.put('/:id', Meal.updateMeal);

// @route    DELETE /Meal/:id
router.delete('/:id', Meal.deleteMeal);

module.exports = router;
