import app from './app';
import dotenv from 'dotenv';
import logger from './config/logger';
import { PORT } from './utils/constants';

dotenv.config();

app.listen(PORT, () => {
  logger.info(`Server running on ${process.env.NEXT_PUBLIC_API_URL || `http://localhost:${PORT}`}`);
});
