const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  // Swagger info
  openapi: '3.0.0',
  info: {
    title: 'API Title', 
    version: '1.0.0',
  },

  // Swagger server
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to route files
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
