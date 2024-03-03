const mongoose = require('./config/db');


mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });

  
  // Close MongoDB connection on application termination
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });