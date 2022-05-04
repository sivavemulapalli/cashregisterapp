import React from "react";
import Grid from "@mui/material/Grid";
import TransactionsPanel from "./components/transactionsPanel/TransactionsPanel";
import SummaryPanel from "./components/summaryPanel/SummaryPanel";
import CashCountInPOS from "./components/cashInPosPanel/CashCountInPOS";
import "./App.css";

const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={4}>
        <CashCountInPOS />
      </Grid>
      <Grid item sm={12} md={4}>
        <TransactionsPanel />
      </Grid>
      <Grid item sm={12} md={4}>
        <SummaryPanel />
      </Grid>
    </Grid>
  );
};

export default App;
