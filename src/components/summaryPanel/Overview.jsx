import React from "react";
import { TextField, Box, Grid, Typography } from "@mui/material";
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
    if (
      value.length > 0 &&
      !isNaN(parseFloat(value)) &&
      typeof parseFloat(value) === "number"
    ) {
      dispatch(setCashInPosFromLastNight(parseFloat(value)));
    } else {
      dispatch(setCashInPosFromLastNight(0));
    }
  };

  return (
    <Box className="box transaction-details">
      <Typography variant="h6">Overview</Typography>
      <Grid container alignItems="center" rowSpacing={0} columnSpacing={2}>
        <Grid item xs={8}>
          <Typography>Cash left in POS last night</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            value={cashAmountInPosFromLastNight}
            onChange={(e) => updateCashFromLastNight(e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography>Total Cash Transaction Today</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
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
          <Typography>Estimated Cash</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
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
          <Typography>Cash Expenses Today</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            hiddenLabel
            id="outlined-size-small"
            disabled={true}
            size="small"
            variant="filled"
            value={expensesAmount}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography>Total Misc Cash Incoming</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            hiddenLabel
            id="outlined-size-small"
            disabled={true}
            size="small"
            variant="filled"
            value={miscIncomingCash}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
