const Meal = require('../controllers/MealController.js');

const router = require('express').Router();

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
