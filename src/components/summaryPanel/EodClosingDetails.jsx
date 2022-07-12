import React, { useState } from "react";
import { TextField, Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCashInPosFromLastNight } from "../../stores/OverviewStore";
import { selectTotalExpensesAmount } from "../../stores/ExpensesStore";
import { selectTotalAdvanceSalaryAmount } from "../../stores/AdvanceSalaryStore";
import { selectTotalIncomingCashAmount } from "../../stores/IncomingCashStore";
import { selectTotalCashCountInPos } from "../../stores/CashCountInPosStore";

const EodClosingDetails = () => {
  const totalCashFromLastNight = useSelector(selectCashInPosFromLastNight);
  const totalExpenses = useSelector(selectTotalExpensesAmount);
  const advanceSalary = useSelector(selectTotalAdvanceSalaryAmount);
  const incomingCash = useSelector(selectTotalIncomingCashAmount);
  const totalCashInPos = useSelector(selectTotalCashCountInPos);
  const [takeHomeCash, setTakeHomeCash] = useState(0);
  const [cashFromBank, setCashFromBank] = useState(0);

  const estimatedPosShouldBe = parseFloat(
    (
      totalCashFromLastNight -
      totalExpenses -
      advanceSalary +
      incomingCash
    ).toFixed(2)
  );

  const updateTakeHomeCash = (value) => {
    if (
      value.length > 0 &&
      !isNaN(parseFloat(value)) &&
      typeof parseFloat(value) === "number"
    ) {
      setTakeHomeCash(parseFloat(value));
    } else {
      setTakeHomeCash(parseFloat(value));
    }
  };

  const updateCashFromBank = (value) => {
    if (
      value.length > 0 &&
      !isNaN(parseFloat(value)) &&
      typeof parseFloat(value) === "number"
    ) {
      setCashFromBank(parseFloat(value));
    } else {
      setCashFromBank(parseFloat(value));
    }
  };

  return (
    <Box className="box misc-incoming">
      <Typography variant="h6">EOD Closing Details</Typography>
      <Grid container alignItems="center" rowSpacing={0} columnSpacing={2}>
        <Grid item xs={8}>
          <Typography>
            Estimated POS Should be (Est. Cash - Expenses - Adv. Pay+ Misc.
            Cash)
          </Typography>
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
            value={estimatedPosShouldBe}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography>Total Cash in POS Available</Typography>
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
            value={totalCashInPos}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography>Cash Difference(+/-)</Typography>
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
            value={totalCashInPos - estimatedPosShouldBe}
          />
        </Grid>
        <Grid item xs={8} className="total-field">
          <Typography variant="subtitle1">Take Home Cash</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            value={takeHomeCash}
            onChange={(e) => updateTakeHomeCash(e.target.value)}
          />
        </Grid>
        <Grid item xs={8} className="total-field">
          <Typography variant="subtitle1">Cash Left in POS</Typography>
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
            value={totalCashInPos - takeHomeCash}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography>If Any Cash Withdrawn from Bank Today</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            value={cashFromBank}
            onChange={(e) => updateCashFromBank(e.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EodClosingDetails;
