const OrderItem = require('../models/OrderItem');

// @desc    Get order items
// @route   GET /orderitems
exports.getOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.find();
    res.json(orderItems);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Get single order item
// @route   GET /orderitems/:id
exports.getOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItem.findById(req.params.id);

    if(!orderItem) {
      return res.status(404).json({ msg: 'Order item not found' });
    }

    res.json(orderItem);

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Order item not found' });
    }
    res.status(500).send('Server Error');
  }
}

// @desc    Create order item
// @route   POST /orderitems
exports.createOrderItem = async (req, res) => {
  const { order, meal, quantity } = req.body;

  try {
    const orderItem = new OrderItem({
      order,
      meal,
      quantity
    });

    await orderItem.save();
    res.json(orderItem);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }

}

// @desc    Update order item
// @route   PUT /orderitems/:id
exports.updateOrderItem = async (req, res) => {
  const { quantity } = req.body;

  try {
    let orderItem = await OrderItem.findById(req.params.id);

    if(!orderItem) {
      return res.status(404).json({ msg: 'Order item not found' });
    }

    orderItem = await OrderItem.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true }
    );

    res.json(orderItem);

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
}

// @desc    Delete order item
// @route   DELETE /orderitems/:id
exports.deleteOrderItem = async (req, res) => {
  try {
    const orderItem = await OrderItem.findById(req.params.id);

    if(!orderItem) {
      return res.status(404).json({ msg: 'Order item not found' });
    }

    await orderItem.remove();

    res.json({ msg: 'Order item removed' });

  } catch (err) {
    console.error(err);
    if(err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Order item not found' });
    }
    res.status(500).send('Server Error');
  }
}
