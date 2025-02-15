import { Pagination } from "./pagination";

export interface TransactionResponse {
  data: Transaction[];
  pagination: Pagination;
}
export interface Transaction {
  id: string;
  amount: number;
  type: TransactionType;
  timestamp: string;
}

export enum TransactionType {
  CREDIT = "credit",
  debit = "debit",
}

export interface TransactionRequestQueryParams {
  page: number;
  limit: number;
}
