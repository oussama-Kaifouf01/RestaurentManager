const Menu = require('../models/Menu');

// @desc    Get all menus
// @route   GET /menus
exports.getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Get single menu
// @route   GET /menus/:id
exports.getMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);

    if(!menu) {
      return res.status(404).json({ msg: 'Menu not found'});
    }

    res.json(menu);

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Menu not found' });
    }
    res.status(500).send('Server Error');
  }
}

// @desc    Create menu
// @route   POST /menus
exports.createMenu = async (req, res) => {
  const { name, meals } = req.body;

  try {
    const menu = new Menu({
      name,
      meals
    });

    await menu.save();
    res.json(menu);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  } 
}

// @desc    Update menu
// @route   PUT /menus/:id
exports.updateMenu = async (req, res) => {
  const { name, meals } = req.body;

  try {
    let menu = await Menu.findById(req.params.id);

    if(!menu) {
      return res.status(404).json({ msg: 'Menu not found' });
    }

    menu = await Menu.findByIdAndUpdate(
      req.params.id,
      { name, meals },
      { new: true }
    );

    res.json(menu);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Delete menu
// @route   DELETE /menus/:id
exports.deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);

    if(!menu) {
      return res.status(404).json({ msg: 'Menu not found' });
    }

    await menu.remove();

    res.json({ msg: 'Menu removed' });

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Menu not found' });
    }
    res.status(500).send('Server Error');
  }
}
