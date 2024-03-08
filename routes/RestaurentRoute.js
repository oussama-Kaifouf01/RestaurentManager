const Restaurent = require('../controllers/RestaurentController.js');

const router = require('express').Router();

// @route    GET /Restaurent
router.get('/', Restaurent.getRestaurents);

// @route    GET /Restaurent/:id
router.get('/:id', Restaurent.getRestaurentById);

// @route    POST /Restaurent
router.post('/', Restaurent.createRestaurent);

// @route    PUT /Restaurent/:id
router.put('/:id', Restaurent.updateRestaurent);

// @route    DELETE /Restaurent/:id
router.delete('/:id', Restaurent.deleteRestaurent);

module.exports = router;
