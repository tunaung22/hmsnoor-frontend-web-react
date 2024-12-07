import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_HOST } from "../../services/api";
import { SaleInvoice } from "../../types/saleInvoice.type";

type QueryParams = {
  saleType: string;
  pageNumber: string;
  pageSize: string;
};

const saleInvoiceApi = createApi({
  reducerPath: "saleInvoiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_HOST,
  }),
  endpoints: (builder) => ({
    fetchSaleInvoices: builder.query<SaleInvoice[], QueryParams>({
      query: (params: QueryParams) => ({
        url: `/api/v1/sales?saleType=${params.saleType}&pageNumber=${params.pageNumber}&pageSize=${params.pageSize}`,
        params: {
          saleType: params.saleType,
          pageNumber: params.pageNumber,
          pageSize: params.pageSize,
        },
      }),
    }),
  }),
});

export const { useFetchSaleInvoicesQuery } = saleInvoiceApi;
export { saleInvoiceApi };
