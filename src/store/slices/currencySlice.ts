import { createSlice } from "@reduxjs/toolkit";

export interface CurrencyState {
  data: Currency[];
  status: "idle" | "loading" | "failed";
}

// ========== State =========================
const initialState: CurrencyState = {
  data: [],
  status: "idle",
};

// ========== Slice =========================
export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    loadCurrencyList: (state) => {
      state.data;
    },
    // saveData: (state, payload) => {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyListAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCurrencyListAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      })
      .addCase(fetchCurrencyListAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// ========== Actions =========================
export const { loadCurrencyList } = currencySlice.actions;

// ========== Reducers =========================
export const currencyReducer = currencySlice.reducer;

// ========== Selectors =========================
// export const selectCurrencyList = (state: RootState) => state.currency.data;
// export const selectStatus = (state: RootState) => state.currency.status;

// ========== Thunk =========================
export const fetchCurrencyListAsync = createAsyncThunk(
  "currency/fetchCurrencyList",
  async () => {
    const response = await fetch(endpoints.v1.currency);
    const data: Currency[] = await response.json();
    const newData: Currency[] = data.map((c) => ({
      // id: c.currencyNotation,
      currencyId: c.currencyId,
      currencyDescription: c.currencyDescription,
      currencyNotation: c.currencyNotation,
    }));

    return newData;
  }
);
