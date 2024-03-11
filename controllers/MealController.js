const Meal = require('../models/Meal');

// @route   GET /meals
// @desc    Get all meals
// @access  Public
exports.getMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   POST /meals
// @desc    Create a meal
// @access  Public  
exports.createMeal = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newMeal = new Meal({
      name,
      description
    });

    const meal = await newMeal.save();

    res.json(meal);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /meals/:id
// @desc    Get meal by ID
// @access  Public
exports.getMealById = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      return res.status(404).json({ msg: 'Meal not found' });
    }

    res.json(meal);
  } catch (err) {
    console.error(err.message);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Meal not found' });
    }
    res.status(500).send('Server Error');
  }
};

/**
 * @desc Update a meal
 * @route PUT /meals/:id
*/
module.exports.updateMeal = async (req, res) => {
  
  const { id } = req.params;

  try {

    let meal = await Meal.findById(id);

    if (!meal) {
      return res.status(404).json({ msg: 'Meal not found'});
    }

    meal = await Meal.findByIdAndUpdate(id, req.body, {
      new: true
    });

    res.json(meal);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

};

// @route   DELETE /meals/:id
// @desc    Delete a meal
// @access  Public
exports.deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      return res.status(404).json({ msg: 'Meal not found' });
    }

    await meal.remove();

    res.json({ msg: 'Meal removed' });
  } catch (err) {
    console.error(err.message);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Meal not found' });
    }
    res.status(500).send('Server Error');
  }
};
