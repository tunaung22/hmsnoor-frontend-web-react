import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_HOST } from "../../services/api";
import { Currency } from "../../types/currency.type";

const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_HOST,
  }),
  endpoints: (builder) => {
    return {
      fetchCurrencies: builder.query<Currency[], null>({
        query: () => ({
          url: "/api/v1/currencies",
          method: "GET",
        }),
      }),
    };
  },
});

export const { useFetchCurrenciesQuery } = currencyApi;
export { currencyApi };
