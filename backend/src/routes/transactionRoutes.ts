// src/routes/transactionRoutes.ts
import { Router } from 'express';
import {
  createTransaction,
  getTransactions,
  getTransactionById,
} from '../controllers/transactionController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: API for managing transactions
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Transaction:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "e0ccf56a-76ca-4983-bc2b-0c75692bc3a1"
 *         amount:
 *           type: number
 *           example: 100.5
 *         type:
 *           type: string
 *           enum: [credit, debit]
 *           example: credit
 *         timestamp:
 *           type: string
 *           format: date-time
 *           example: "2025-02-15T10:30:00Z"
 */

/**
 * @swagger
 * /api/transactions:
 *   post:
 *     summary: Create a new transaction
 *     description: Add a new transaction with amount, type (credit/debit), and timestamp
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 100.5
 *               type:
 *                 type: string
 *                 enum: [credit, debit]
 *                 example: credit
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-02-15T10:30:00Z"
 *     responses:
 *       201:
 *         description: Transaction created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 amount:
 *                   type: number
 *                 type:
 *                   type: string
 *                 timestamp:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post('/', createTransaction);

/**
 * @swagger
 * /api/transactions:
 *   get:
 *     summary: Get all transactions
 *     description: Retrieve a list of all transactions in the database
 *     tags: [Transactions]
 *     parameters:
 *       - in: query
 *         name: page
 *         required: false
 *         description: The page number for pagination
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         required: false
 *         description: The number of transactions per page
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: List of transactions
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Transaction'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     currentPage:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     totalRecords:
 *                       type: integer
 *                     pageSize:
 *                       type: integer
 *                   example: {
 *                     currentPage: 1,
 *                     totalPages: 1,
 *                     totalRecords: 2,
 *                     pageSize: 10
 *                   }
 *       500:
 *         description: Internal server error
 */
router.get('/', getTransactions);

/**
 * @swagger
 * /api/transactions/{id}:
 *   get:
 *     summary: Get a specific transaction by ID
 *     description: Fetch a single transaction based on the provided ID
 *     tags: [Transactions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The transaction ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Transaction found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaction'
 *       404:
 *         description: Transaction not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getTransactionById);

export default router;
