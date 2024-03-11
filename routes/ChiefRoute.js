const Chief = require('../controllers/ChiefController.js');

const router = require('express').Router();

// @route    GET /Chief
router.get('/', Chief.getChiefs);

// @route    GET /Chief/:id
router.get('/:id', Chief.getChief);

// @route    POST /Chief
router.post('/', Chief.createChief);

// @route    PUT /Chief/:id
router.put('/:id', Chief.updateChief);

// @route    DELETE /Chief/:id
router.delete('/:id', Chief.deleteChief);

module.exports = router;
