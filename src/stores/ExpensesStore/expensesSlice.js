import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  totalExpensesAmount: 0,
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    setTotalExpensesAmount(expensesState, action) {
      expensesState.totalExpensesAmount = action.payload;
    },
  },
});

export const { setTotalExpensesAmount } = expensesSlice.actions;
export const expensesReducer = expensesSlice.reducer;

export const selectTotalExpensesAmount = (state) =>
  state.expenses.totalExpensesAmount;
