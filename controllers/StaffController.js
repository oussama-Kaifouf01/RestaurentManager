const Staff = require('../models/Staff');

// @desc    Get all staff
// @route   GET /staff
exports.getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Get single staff member
// @route   GET /staff/:id
exports.getStaffMember = async (req, res) => {
  try {
    const staffMember = await Staff.findById(req.params.id);

    if(!staffMember) {
      return res.status(404).json({ msg: 'Staff member not found' }); 
    }

    res.json(staffMember);

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Staff member not found' });
    }
    res.status(500).send('Server Error');
  }
}

// @desc    Create staff member
// @route   POST /staff
exports.createStaffMember = async (req, res) => {
  const { name, position } = req.body;

  try {
    const staffMember = new Staff({
      name,
      position
    });

    await staffMember.save();
    res.json(staffMember);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

}

// @desc    Update staff member
// @route   PUT /staff/:id
exports.updateStaffMember = async (req, res) => {
  const { name, position } = req.body;

  try {
    let staffMember = await Staff.findById(req.params.id);

    if(!staffMember) {
      return res.status(404).json({ msg: 'Staff member not found' });
    }

    staffMember = await Staff.findByIdAndUpdate(
      req.params.id,
      { name, position },
      { new: true }  
    );

    res.json(staffMember);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Delete staff member  
// @route   DELETE /staff/:id
exports.deleteStaffMember = async (req, res) => {
  try {
    const staffMember = await Staff.findById(req.params.id);

    if(!staffMember) {
      return res.status(404).json({ msg: 'Staff member not found' });
    }

    await staffMember.remove();

    res.json({ msg: 'Staff member removed' });

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Staff member not found' });
    }
    res.status(500).send('Server Error');
  }
}
