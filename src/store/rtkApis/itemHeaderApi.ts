import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_HOST } from "../../services/api";
import { ItemHeader } from "../../types/item.type";

const itemHeaderApi = createApi({
  reducerPath: "itemHeaderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_HOST,
  }),
  endpoints(builder) {
    return {
      fetchItemHeaders: builder.query<ItemHeader[], null>({
        query: () => ({
          url: "/api/v1/items",
          method: "GET",
        }),
      }),
    };
  },
});

export const { useFetchItemHeadersQuery } = itemHeaderApi;
export { itemHeaderApi };
