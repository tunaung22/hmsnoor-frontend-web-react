import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_HOST } from "../../services/api";
import { ItemCategory } from "../../types/itemCategory.type";

const itemCategoryApi = createApi({
  reducerPath: "itemCategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_HOST,
  }),
  endpoints(builder) {
    return {
      fetchItemCategories: builder.query<ItemCategory[], null>({
        query: () => ({
          url: "/api/v1/categories",
          method: "GET",
        }),
      }),
    };
  },
});

export const { useFetchItemCategoriesQuery } = itemCategoryApi;
export { itemCategoryApi };
