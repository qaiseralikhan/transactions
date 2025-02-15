import express from 'express';
import cors from 'cors';
import transactionRoutes from './routes/transactionRoutes';
import errorHandler from './middleware/errorHandler';
import pinoLogger from 'express-pino-logger';
import logger from './config/logger';
import { swaggerSpec, swaggerUi } from './config/swagger';

const app = express();

app.use(cors());
app.use(express.json());
app.use(pinoLogger(logger));

// Middleware to serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use the transaction routes
app.use('/api/transactions', transactionRoutes);

app.use(errorHandler);

export default app;
