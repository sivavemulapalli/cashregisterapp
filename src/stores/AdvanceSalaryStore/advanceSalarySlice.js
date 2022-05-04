import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  totalAdvanceSalaryAmount: 0,
};

const advanceSalarySlice = createSlice({
  name: "advanceSalary",
  initialState,
  reducers: {
    setTotalAdvanceSalaryAmount(advanceSalaryState, action) {
      advanceSalaryState.totalAdvanceSalaryAmount = action.payload;
    },
  },
});

export const { setTotalAdvanceSalaryAmount } = advanceSalarySlice.actions;
export const advanceSalaryReducer = advanceSalarySlice.reducer;

export const selectTotalAdvanceSalaryAmount = (state) =>
  state.advanceSalary.totalAdvanceSalaryAmount;
