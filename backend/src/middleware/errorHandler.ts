import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';

const errorHandler = (err: any, req: Request, res: Response, _next: NextFunction) => {
  logger.error({
    err,
    msg: `${req.url}, ${err.message}`,
    stack: err.stack,
  });

  res.status(err.status || 500).json({ error: err.message || 'Something went wrong' });
};

export default errorHandler;
