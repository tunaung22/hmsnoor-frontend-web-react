import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { currencyApi } from "./rtkApis/currencyApi";
import { itemHeaderApi } from "./rtkApis/itemHeaderApi";
import { itemCategoryApi } from "./rtkApis/itemCategoryApi";
import { saleInvoiceApi } from "./rtkApis/saleInvoiceApi";

export const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
    [itemHeaderApi.reducerPath]: itemHeaderApi.reducer,
    [itemCategoryApi.reducerPath]: itemCategoryApi.reducer,
    [saleInvoiceApi.reducerPath]: saleInvoiceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(currencyApi.middleware)
      .concat(itemHeaderApi.middleware)
      .concat(itemCategoryApi.middleware)
      .concat(saleInvoiceApi.middleware),
});

setupListeners(store.dispatch);

export type AppStore = typeof store;
// export type AppDispatch = AppStore["dispatch"];
export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<AppStore["getState"]>;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
