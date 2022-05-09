import React from "react";
import { TextField, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalExpensesAmount } from "../../stores/ExpensesStore";
import { selectTotalIncomingCashAmount } from "../../stores/IncomingCashStore";
import { selectCashTransactionsAmount } from "../../stores/TransactionsStore";
import {
  setCashInPosFromLastNight,
  selectCashInPosFromLastNight,
} from "../../stores/OverviewStore";

const Overview = () => {
  const miscIncomingCash = useSelector(selectTotalIncomingCashAmount);
  const expensesAmount = useSelector(selectTotalExpensesAmount);
  const cashTransactionsAmount = useSelector(selectCashTransactionsAmount);
  const cashAmountInPosFromLastNight = useSelector(
    selectCashInPosFromLastNight
  );
  const dispatch = useDispatch();

  const updateCashFromLastNight = (value) => {
    dispatch(setCashInPosFromLastNight(parseFloat(value)));
  };

  return (
    <Box className="box transaction-details">
      <h3>Overview</h3>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={2}>
        <Grid item xs={8}>
          <div>Cash left in POS last night</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            value={cashAmountInPosFromLastNight}
            onChange={(e) => updateCashFromLastNight(e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <div>Total Cash Transaction Today</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            disabled={true}
            value={cashTransactionsAmount}
          />
        </Grid>
        <Grid item xs={8}>
          <div>Estimated Cash</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            disabled={true}
            value={cashAmountInPosFromLastNight}
          />
        </Grid>
        <Grid item xs={8}>
          <div>Cash Expenses Today</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            variant="filled"
            disabled={true}
            value={expensesAmount}
          />
        </Grid>
        <Grid item xs={8}>
          <div>Total Misc Cash Incoming</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            variant="filled"
            disabled={true}
            value={miscIncomingCash}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
