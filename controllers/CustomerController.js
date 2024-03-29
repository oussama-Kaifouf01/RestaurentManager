const Customer = require('../models/Customer');

// @desc    Get all customers
// @route   GET /customers
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Get single customer
// @route   GET /customers/:id
exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }

    res.json(customer);
    
  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Customer not found' });
    }
    res.status(500).send('Server Error');
  }
}

// @desc    Create a customer
// @route   POST /customers
exports.createCustomer = async (req, res) => {
  const { name, phone, email } = req.body;

  try {
    const customer = new Customer({
      name,
      phone,
      email
    });

    await customer.save();

    res.json(customer);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

}

// @desc    Update a customer
// @route   PUT /customers/:id 
exports.updateCustomer = async (req, res) => {
  const { name, phone, email } = req.body;

  try {
    let customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }

    customer = await Customer.findByIdAndUpdate(req.params.id,
      { name, phone, email },
      { new: true });

    res.json(customer);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Delete a customer
// @route   DELETE /customers/:id
exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);

    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }

    await customer.remove();

    res.json({ msg: 'Customer removed' });

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Customer not found' });
    }
    res.status(500).send('Server Error');
  }
}
