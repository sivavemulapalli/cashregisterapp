import { combineReducers } from "@reduxjs/toolkit";
import { cashCountInPosReducer } from "../CashCountInPosStore";
import { transactionsReducer } from "../TransactionsStore";
import { expensesReducer } from "../ExpensesStore";
import { incomingCashReducer } from "../IncomingCashStore";
import { advanceSalaryReducer } from "../AdvanceSalaryStore";
import { overviewReducer } from "../OverviewStore";

const rootReducer = combineReducers({
  cashCountInPos: cashCountInPosReducer,
  transactions: transactionsReducer,
  expenses: expensesReducer,
  incomingCash: incomingCashReducer,
  advanceSalary: advanceSalaryReducer,
  overview: overviewReducer,
});

export default rootReducer;
