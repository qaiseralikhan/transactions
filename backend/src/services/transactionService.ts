import supabase from '../config/supabaseClient';
import { Transaction } from '../types/transactions';

export const createTransactionService = async (
  amount: number,
  type: 'credit' | 'debit',
  timestamp?: string,
) => {
  const { data, error } = await supabase
    .from('transactions')
    .insert([{ amount, type, timestamp: timestamp || new Date().toISOString() }])
    .select()
    .single();

  if (error) {
    throw new Error(error.details || error.message);
  }
  return data as Transaction;
};

export const getTransactionsService = async (page: number, limit: number) => {
  const offset = (page - 1) * limit;
  const { data, error, count } = await supabase
    .from('transactions')
    .select('*', { count: 'exact' })
    .range(offset, offset + limit - 1);

  if (error) {
    throw new Error(error.details || error.message);
  }
  return {
    data,
    total: count || 0,
  };
};

export const getTransactionByIdService = async (id: string) => {
  const { data, error } = await supabase
    .from('transactions')
    .select('*')
    .eq('id', id)
    .maybeSingle();
  if (error) {
    throw new Error(error.details || error.message);
  }
  return data;
};
