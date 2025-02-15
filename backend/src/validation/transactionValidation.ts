import { z } from 'zod';

export const transactionSchema = z.object({
  amount: z.number().positive(),
  type: z.enum(['credit', 'debit']),
  timestamp: z.string().regex(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/, 'Invalid timestamp format'),
});
