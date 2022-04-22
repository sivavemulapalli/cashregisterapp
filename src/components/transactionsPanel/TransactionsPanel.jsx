import React from "react";
import { Paper, Divider } from "@mui/material";
import TransactionsDetails from "./TransactionsDetails";
import ExpensesAndCustomerReturns from "./ExpensesAndCustomerReturns";
import MiscIncoming from "./MiscIncoming";

class Transactions extends React.Component {
  render() {
    return (
      <Paper className="panel">
        <TransactionsDetails />
        <Divider />
        <ExpensesAndCustomerReturns />
        <Divider />
        <MiscIncoming />
      </Paper>
    );
  }
}

export default Transactions;
