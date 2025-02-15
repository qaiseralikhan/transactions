import { useQuery } from "@tanstack/react-query";
import { TransactionQueries } from "../queries/transactions";
import { TransactionRequestQueryParams } from "../types/transactions";

export const useGetAllTransactions = (
  queryParams: TransactionRequestQueryParams
) => {
  const allTransactionsKey = "all-transactions";
  return useQuery({
    queryKey: [allTransactionsKey, queryParams],
    queryFn: () => TransactionQueries.getAllTransactions(queryParams),
  });
};
