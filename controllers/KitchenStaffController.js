const KitchenStaff = require('../models/KitchenStaff');

// @desc    Get all kitchen staff
// @route   GET /kitchenstaff
exports.getKitchenStaff = async (req, res) => {
  try {
    const kitchenStaff = await KitchenStaff.find();
    res.json(kitchenStaff);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error'); 
  }
}

// @desc    Get single kitchen staff member
// @route   GET /kitchenstaff/:id
exports.getKitchenStaffMember = async (req, res) => {
  try {
    const kitchenStaffMember = await KitchenStaff.findById(req.params.id);

    if(!kitchenStaffMember) {
      return res.status(404).json({ msg: 'Kitchen staff member not found' });
    }

    res.json(kitchenStaffMember);

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Kitchen staff member not found' });
    }
    res.status(500).send('Server Error');
  }
}

// @desc    Create kitchen staff member
// @route   POST /kitchenstaff
exports.createKitchenStaffMember = async (req, res) => {
  const { name } = req.body;

  try {
    const kitchenStaffMember = new KitchenStaff({
      name
    });

    await kitchenStaffMember.save();
    res.json(kitchenStaffMember);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

}

// @desc    Update kitchen staff member
// @route   PUT /kitchenstaff/:id
exports.updateKitchenStaffMember = async (req, res) => {
  const { name } = req.body;

  try {
    let kitchenStaffMember = await KitchenStaff.findById(req.params.id);

    if(!kitchenStaffMember) {
      return res.status(404).json({ msg: 'Kitchen staff member not found' });
    }

    kitchenStaffMember = await KitchenStaff.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );

    res.json(kitchenStaffMember);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Delete kitchen staff member
// @route   DELETE /kitchenstaff/:id  
exports.deleteKitchenStaffMember = async (req, res) => {
  try {
    const kitchenStaffMember = await KitchenStaff.findById(req.params.id);

    if(!kitchenStaffMember) {
      return res.status(404).json({ msg: 'Kitchen staff member not found' });
    }

    await kitchenStaffMember.remove();

    res.json({ msg: 'Kitchen staff member removed' });

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Kitchen staff member not found' });
    }
    res.status(500).send('Server Error');
  }
}
