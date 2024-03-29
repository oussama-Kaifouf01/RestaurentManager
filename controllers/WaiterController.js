const Waiter = require('../models/Waiter');

// @desc    Get all waiters
// @route   GET /waiters
exports.getWaiters = async (req, res) => {
  try {
    const waiters = await Waiter.find();
    res.json(waiters);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Get single waiter
// @route   GET /waiters/:id
exports.getWaiter = async (req, res) => {
  try {
    const waiter = await Waiter.findById(req.params.id);

    if(!waiter) {
      return res.status(404).json({ msg: 'Waiter not found' });
    }

    res.json(waiter);

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Waiter not found' });
    }
    res.status(500).send('Server Error');
  }
}

// @desc    Create waiter
// @route   POST /waiters
exports.createWaiter = async (req, res) => {
  const { name } = req.body;

  try {
    const waiter = new Waiter({
      name
    });

    await waiter.save();
    res.json(waiter);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

}

// @desc    Update waiter
// @route   PUT /waiters/:id
exports.updateWaiter = async (req, res) => {
  const { name } = req.body;

  try {
    let waiter = await Waiter.findById(req.params.id);

    if(!waiter) {
      return res.status(404).json({ msg: 'Waiter not found' });
    }

    waiter = await Waiter.findByIdAndUpdate(
      req.params.id,
      { name },
      { new: true }
    );

    res.json(waiter);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Delete waiter
// @route   DELETE /waiters/:id
exports.deleteWaiter = async (req, res) => {
  try {
    const waiter = await Waiter.findById(req.params.id);

    if(!waiter) {
      return res.status(404).json({ msg: 'Waiter not found' });
    }

    await waiter.remove();

    res.json({ msg: 'Waiter removed' });

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Waiter not found' });
    }
    res.status(500).send('Server Error');
  }
}
