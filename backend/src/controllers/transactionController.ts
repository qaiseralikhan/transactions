import {
  createTransactionService,
  getTransactionsService,
  getTransactionByIdService,
} from '../services/transactionService';
import { transactionSchema } from '../validation/transactionValidation';
import logger from '../config/logger';

import { RequestHandler } from 'express';

export const createTransaction: RequestHandler = async (req, res, next) => {
  try {
    const parsedData = transactionSchema.safeParse(req.body);
    if (!parsedData.success) {
      const errorMessages = parsedData.error.errors.map((e) => e.message);
      res.status(400).json({ errors: errorMessages });
      return;
    }

    const { amount, type, timestamp } = parsedData.data;
    const newTransaction = await createTransactionService(amount, type, timestamp);

    logger.info('Transaction created:', newTransaction);
    res.status(201).json(newTransaction);
  } catch (error: any) {
    next(error); // Make sure you call next() for error handling middleware
  }
};

export const getTransactions: RequestHandler = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.params;
    const pageNumber = parseInt(page as string, 10);
    const pageSize = parseInt(limit as string, 10);

    const { data, total } = await getTransactionsService(pageNumber, pageSize);
    const totalPages = Math.ceil(total / pageSize);

    res.status(200).json({
      data,
      pagination: {
        currentPage: pageNumber,
        totalPages,
        totalRecords: total,
        pageSize,
      },
    });
  } catch (error: any) {
    next(error);
  }
};

export const getTransactionById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const transaction = await getTransactionByIdService(id);
    if (!transaction) {
      res.status(404).json({ error: 'Transaction not found' });
      return;
    }
    res.status(200).json(transaction);
  } catch (error: any) {
    next(error);
  }
};
