const Manager = require('../models/Manager');

// @desc    Get all managers
// @route   GET /managers
exports.getManagers = async (req, res) => {
  try {
    const managers = await Manager.find();
    res.json(managers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Get single manager
// @route   GET /managers/:id
exports.getManager = async (req, res) => {
  try {
    const manager = await Manager.findById(req.params.id);

    if(!manager) {
      return res.status(404).json({ msg: 'Manager not found' });
    }

    res.json(manager);

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Manager not found' });
    }
    res.status(500).send('Server Error');
  }
}

// @desc    Create manager
// @route   POST /managers
exports.createManager = async (req, res) => {
  const { name } = req.body;

  try {
    const manager = new Manager({
      name
    });

    await manager.save();
    res.json(manager);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

}

// @desc    Update manager
// @route   PUT /managers/:id
exports.updateManager = async (req, res) => {
  const { name } = req.body;

  try {
    let manager = await Manager.findById(req.params.id);

    if(!manager) {
      return res.status(404).json({ msg: 'Manager not found' });
    }

    manager = await Manager.findByIdAndUpdate(
      req.params.id,
      { name }, 
      { new: true }
    );

    res.json(manager);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Delete manager
// @route   DELETE /managers/:id
exports.deleteManager = async (req, res) => {
  try {
    const manager = await Manager.findById(req.params.id);

    if(!manager) {
      return res.status(404).json({ msg: 'Manager not found' });
    }

    await manager.remove();

    res.json({ msg: 'Manager removed' });

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Manager not found' });
    }
    res.status(500).send('Server Error');
  }
}
