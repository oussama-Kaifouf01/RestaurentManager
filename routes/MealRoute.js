const express = require('express');
const router = express.Router();

const MealController = require('../controllers/MealController');

// @route   GET /meals
// @desc    Get all meals
// @access  Public
router.get('/', MealController.getMeals);

// @route   POST /meals
// @desc    Create a new meal
// @access  Public
router.post('/', MealController.createMeal); 

// @route   GET /meals/:id
// @desc    Get single meal by id
// @access  Public  
router.get('/:id', MealController.getMealById);

// @route   DELETE /meals/:id
// @desc    Delete a meal
// @access  Public
router.delete('/:id', MealController.deleteMeal);

module.exports = router;
