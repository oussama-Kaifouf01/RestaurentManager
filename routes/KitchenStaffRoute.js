const KitchenStaff = require('../controllers/KitchenStaffController.js');

const router = require('express').Router();

// @route    GET /KitchenStaff
router.get('/', KitchenStaff.getKitchenStaff);

// @route    GET /KitchenStaff/:id
router.get('/:id', KitchenStaff.getKitchenStaffMember);

// @route    POST /KitchenStaff
router.post('/', KitchenStaff.createKitchenStaffMember);

// @route    PUT /KitchenStaff/:id
router.put('/:id', KitchenStaff.updateKitchenStaffMember);

// @route    DELETE /KitchenStaff/:id
router.delete('/:id', KitchenStaff.deleteKitchenStaffMember);

module.exports = router;
