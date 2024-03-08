const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));




const mongoose = require('./config/db');
const restaurentRouter = require('./routes/RestaurentRoute');

// Connect to MongoDB
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Express middleware
app.use(express.json());


// Routes
app.use('/api/restaurents', require('./routes/RestaurentRoute'));
app.use('/api/customers', require('./routes/CustomerRoute'));
app.use('/api/kitchenstaff', require('./routes/KitchenStaffRoute'));
app.use('/api/managers', require('./routes/ManagerRoute'));
app.use('/api/orders', require('./routes/OrderRoute'));
app.use('/api/orderitems', require('./routes/OrderItemRoute'));
app.use('/api/staff', require('./routes/StaffRoute'));
app.use('/api/waiters', require('./routes/WaiterRoute'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Listen for requests
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
