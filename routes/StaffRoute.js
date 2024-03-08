const Staff = require('../controllers/StaffController.js');

const router = require('express').Router();

// @route    GET /Staff
router.get('/', Staff.getStaff);

// @route    GET /Staff/:id
router.get('/:id', Staff.getStaffMember);

// @route    POST /Staff
router.post('/', Staff.createStaffMember);

// @route    PUT /Staff/:id
router.put('/:id', Staff.updateStaffMember);

// @route    DELETE /Staff/:id
router.delete('/:id', Staff.deleteStaffMember);

module.exports = router;
