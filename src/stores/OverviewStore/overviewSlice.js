import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cashInPosFromLastNight: 0,
};

const overviewSlice = createSlice({
  name: "overview",
  initialState,
  reducers: {
    setCashInPosFromLastNight(overviewState, action) {
      overviewState.cashInPosFromLastNight = action.payload;
    },
  },
});

export const { setCashInPosFromLastNight } = overviewSlice.actions;
export const overviewReducer = overviewSlice.reducer;

export const selectCashInPosFromLastNight = (state) =>
  state.overview.cashInPosFromLastNight;
