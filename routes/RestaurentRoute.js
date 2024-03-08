const express = require('express');
const router = express.Router();

const RestaurentController = require('../controllers/RestaurentController');

// @route   GET /api/restaurents
// @desc    Get all restaurents
// @access  Public
router.get('/', RestaurentController.getRestaurents); 

// @route   GET /api/restaurents/:id
// @desc    Get single restaurent by id
// @access  Public
router.get('/:id', RestaurentController.getRestaurentById);

// @route   POST /api/restaurents
// @desc    Create a new restaurent
// @access  Private 
router.post('/', RestaurentController.createRestaurent);

// @route   PUT /api/restaurents/:id
// @desc    Update a restaurent
// @access  Private  
router.put('/:id', RestaurentController.updateRestaurent);

// @route   DELETE /api/restaurents/:id  
// @desc    Delete a restaurent
// @access  Private
router.delete('/:id', RestaurentController.deleteRestaurent);

module.exports = router;
