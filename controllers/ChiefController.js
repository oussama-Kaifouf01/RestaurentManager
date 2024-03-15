const Chief = require('../models/Chief');

// @desc    Get all chiefs
// @route   GET /chiefs
exports.getChiefs = async (req, res) => {
  try {
    const chiefs = await Chief.find();
    res.json(chiefs);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

// @desc    Get single chief
// @route   GET /chiefs/:id
exports.getChief = async (req, res) => {  
  try {
    const chief = await Chief.findById(req.params.id);

    if (!chief) {
      return res.status(404).json({ msg: 'Chief not found' });
    }

    res.json(chief);
  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Chief not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @desc    Create a chief
// @route   POST /chiefs
exports.createChief = async (req, res) => {
  const { name, picture } = req.body;

  try {
    const newChief = new Chief({
      name, 
      picture,
     
    });

    const chief = await newChief.save();
    res.json(chief);

  } 
  catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  } 
}

// @desc    Update a chief
// @route   PUT /chiefs/:id
exports.updateChief = async (req, res) => {
  const { name, picture } = req.body;

  try {
    let chief = await Chief.findById(req.params.id);

    if (!chief) {
      return res.status(404).json({ msg: 'Chief not found' });
    }

    chief = await Chief.findByIdAndUpdate(req.params.id,
      { name, picture },
      { new: true });

    res.json(chief);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Delete a chief
// @route   DELETE /chiefs/:id
exports.deleteChief = async (req, res) => {
  try {
    const chief = await Chief.findById(req.params.id);

    if (!chief) {
      return res.status(404).json({ msg: 'Chief not found' });
    }

    await chief.remove();

    res.json({ msg: 'Chief removed' });

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Chief not found' });
    }
    res.status(500).send('Server Error');
  }
}
