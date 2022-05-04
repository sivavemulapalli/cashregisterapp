import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  totalIncomingCashAmount: 0,
};

const incomingCashSlice = createSlice({
  name: "incomingCash",
  initialState,
  reducers: {
    setTotalIncomingCashAmount(incomingCashState, action) {
      incomingCashState.totalIncomingCashAmount = action.payload;
    },
  },
});

export const { setTotalIncomingCashAmount } = incomingCashSlice.actions;
export const incomingCashReducer = incomingCashSlice.reducer;

export const selectTotalIncomingCashAmount = (state) =>
  state.incomingCash.totalIncomingCashAmount;
