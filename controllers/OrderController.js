const Order = require('../models/Order');

// @desc    Get all orders
// @route   GET /orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Get single order
// @route   GET /orders/:id
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if(!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    res.json(order);

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Order not found' });
    }
    res.status(500).send('Server Error');
  }
}

// @desc    Create order
// @route   POST /orders
exports.createOrder = async (req, res) => {
  const { 
    customer,
    items,
    total,
    status
  } = req.body;

  try {
    const order = new Order({
      customer,
      items,
      total,
      status
    });

    await order.save();
    res.json(order);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

}

// @desc    Update order
// @route   PUT /orders/:id
exports.updateOrder = async (req, res) => {
  const { total, status } = req.body;

  try {
    let order = await Order.findById(req.params.id);

    if(!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    order = await Order.findByIdAndUpdate(
      req.params.id,
      { total, status },
      { new: true }
    );

    res.json(order);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Delete order
// @route   DELETE /orders/:id
exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if(!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    await order.remove();

    res.json({ msg: 'Order removed' });

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Order not found' });
    }
    res.status(500).send('Server Error');
  }
}
