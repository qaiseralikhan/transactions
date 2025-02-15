import api from "@/helpers/api";
import { AxiosResponse } from "axios";
import {
  TransactionRequestQueryParams,
  TransactionResponse,
} from "../types/transactions";

export class TransactionQueries {
  static async getAllTransactions(queryParams: TransactionRequestQueryParams) {
    const response: AxiosResponse<TransactionResponse> = await api.get(
      "/api/transactions",
      { params: queryParams }
    );
    return response.data;
  }
}
