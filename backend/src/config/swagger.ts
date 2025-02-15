import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import { BASE_URL } from '../utils/constants';
import swaggerUi from 'swagger-ui-express';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Transaction API',
      version: '1.0.0',
      description: 'API for managing transactions',
    },
    servers: [
      {
        url: BASE_URL, // Fallback to local if not set
      },
    ],
  },
  // Specify the path to your API docs (the JS files with routes and controllers)
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Adjust the paths based on your project structure
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi };
