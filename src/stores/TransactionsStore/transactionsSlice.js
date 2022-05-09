import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  totalTransactionsAmount: 0,
  cashTransactionsAmount: 0,
  cardTransactionsAmount: 0,
  ebtTransactionsAmount: 0,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTotalTransactionsAmount(transactionsState, action) {
      transactionsState.totalTransactionsAmount = action.payload;
    },
    setCashTransactionsAmount(transactionsState, action) {
      transactionsState.cashTransactionsAmount = action.payload;
    },
    setCardTransactionsAmount(transactionsState, action) {
      transactionsState.cardTransactionsAmount = action.payload;
    },
    setEbtTransactionsAmount(transactionsState, action) {
      transactionsState.ebtTransactionsAmount = action.payload;
    },
  },
});

export const {
  setTotalTransactionsAmount,
  setCashTransactionsAmount,
  setCardTransactionsAmount,
  setEbtTransactionsAmount,
} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;

export const selectTotalTransactionsAmount = (state) =>
  state.transactions.totalTransactionsAmount;
export const selectCashTransactionsAmount = (state) =>
  state.transactions.cashTransactionsAmount;
export const selectCardTransactionsAmount = (state) =>
  state.transactions.cardTransactionsAmount;
export const selectEbtTransactionsAmount = (state) =>
  state.transactions.ebtTransactionsAmount;
