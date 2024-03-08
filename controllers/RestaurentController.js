const Restaurent = require('../models/Restaurent');

// @desc    Get all restaurents
// @route   GET /api/restaurents
exports.getRestaurents = async (req, res) => {
  try {
    const restaurents = await Restaurent.find();
    res.json(restaurents);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// @desc    Get single restaurent by id
// @route   GET /api/restaurents/:id
exports.getRestaurentById = async (req, res) => {
  try {
    const restaurent = await Restaurent.findById(req.params.id);

    if (!restaurent) {
      return res.status(404).json({ msg: 'Restaurent not found' });
    }

    res.json(restaurent);
  } catch (err) {
    console.error(err);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Restaurent not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Create a restaurent
// @route   POST /api/restaurents
exports.createRestaurent = async (req, res) => {
  const { name, manager, menu, staff } = req.body;

  try {
    const restaurent = new Restaurent({
      name,
      manager,
      menu,
      staff
    });

    await restaurent.save();

    res.json(restaurent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Update a restaurent
// @route   PUT /api/restaurents/:id
exports.updateRestaurent = async (req, res) => {
  const { name, manager, menu, staff } = req.body;

  try {
    let restaurent = await Restaurent.findById(req.params.id);

    if (!restaurent) {
      return res.status(404).json({ msg: 'Restaurent not found' });
    }

    restaurent = await Restaurent.findByIdAndUpdate(
      req.params.id,
      { name, manager, menu, staff },
      { new: true }
    );

    res.json(restaurent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a restaurent
// @route   DELETE /api/restaurents/:id
exports.deleteRestaurent = async (req, res) => {
  try {
    const restaurent = await Restaurent.findById(req.params.id);

    if (!restaurent) {
      return res.status(404).json({ msg: 'Restaurent not found' });
    }

    await restaurent.remove();

    res.json({ msg: 'Restaurent removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Restaurent not found' });
    }
    res.status(500).send('Server Error');
  }
};
