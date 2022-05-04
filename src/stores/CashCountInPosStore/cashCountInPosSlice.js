import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  totalCashCountInPos: 0,
  totalBillsInPosAmount: 0,
  totalRollsInPosAmount: 0,
  totalCoinsInPosAmount: 0,
};

const cashCountInPosSlice = createSlice({
  name: "cashCountInPos",
  initialState,
  reducers: {
    setTotalCashCountInPos(cashCountInPosState, action) {
      cashCountInPosState.totalCashCountInPos = action.payload;
    },
    setTotalBillsInPosAmount(cashCountInPosState, action) {
      cashCountInPosState.totalBillsInPosAmount = action.payload;
    },
    setTotalRollsInPosAmount(cashCountInPosState, action) {
      cashCountInPosState.totalRollsInPosAmount = action.payload;
    },
    setTotalCoinsInPosAmount(cashCountInPosState, action) {
      cashCountInPosState.totalCoinsInPosAmount = action.payload;
    },
  },
});

export const {
  setTotalCashCountInPos,
  setTotalBillsInPosAmount,
  setTotalRollsInPosAmount,
  setTotalCoinsInPosAmount,
} = cashCountInPosSlice.actions;
export const cashCountInPosReducer = cashCountInPosSlice.reducer;

export const selectTotalCashCountInPos = (state) =>
  state.cashCountInPos.totalCashCountInPos;
export const selectTotalBillsInPosAmount = (state) =>
  state.cashCountInPos.totalBillsInPosAmount;
export const selectTotalRollsInPosAmount = (state) =>
  state.cashCountInPos.totalRollsInPosAmount;
export const selectTotalCoinsInPosAmount = (state) =>
  state.cashCountInPos.totalCoinsInPosAmount;
