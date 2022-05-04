import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  totalTransactionsAmount: 0,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTotalTransactionsAmount(transactionsState, action) {
      console.log("action", action);
      transactionsState.totalTransactionsAmount = action.payload;
    },
  },
});

export const { setTotalTransactionsAmount } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;

export const selectTotalTransactionsAmount = (state) =>
  state.transactions.totalTransactionsAmount;
