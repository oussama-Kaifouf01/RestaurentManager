const Manager = require('../controllers/ManagerController.js');

const router = require('express').Router();



// @route    GET /Manager
router.get('/', Manager.getManagers);

// @route    GET /Manager/:id
router.get('/:id', Manager.getManager);

// @route    POST /Manager
router.post('/', Manager.createManager);

// @route    PUT /Manager/:id
router.put('/:id', Manager.updateManager);

// @route    DELETE /Manager/:id
router.delete('/:id', Manager.deleteManager);

module.exports = router;
