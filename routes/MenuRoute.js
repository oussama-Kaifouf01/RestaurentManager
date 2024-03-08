const Menu = require('../controllers/MenuController.js');

const router = require('express').Router();

// @route    GET /Menu
router.get('/', Menu.getMenus);

// @route    GET /Menu/:id
router.get('/:id', Menu.getMenuById);

// @route    POST /Menu
router.post('/', Menu.createMenu);

// @route    PUT /Menu/:id
router.put('/:id', Menu.updateMenu);

// @route    DELETE /Menu/:id
router.delete('/:id', Menu.deleteMenu);

module.exports = router;
