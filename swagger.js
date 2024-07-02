// swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const router = express.Router();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BlockBounce API Documentation',
      version: '1.0.0',
      description: 'API documentation for BlockBounce backend',
    },
    servers: [
      {
        url: 'http://localhost:4444',  
        description: 'Development server',
      },
      {
        url: 'http://localhost:4445', 
        description: 'Testing server',
      },
      {
        url: 'http://localhost:4446', 
        description: 'Production server',
      },
    ],
  },
  apis: ['./routes/*.js', './models/*.js'], 
};

const specs = swaggerJsdoc(options);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(specs));

module.exports = router;
