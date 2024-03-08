const express = require('express');
const app = express();

const mongoose = require('./config/db');
const restaurentRouter = require('./routes/RestaurentRoute');

// Connect to MongoDB
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Express middleware
app.use(express.json());

// Use Restaurent routes
app.use('/api/restaurents', restaurentRouter);

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
