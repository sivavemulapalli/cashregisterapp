import React, { useState } from "react";
import { TextField, Box, Grid } from "@mui/material";
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
      <h3>EOD Closing Details</h3>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={2}>
        <Grid item xs={8}>
          <div>
            Estimated POS Should be (Est. Cash - Expenses - Adv. Pay+ Misc.
            Cash)
          </div>
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
            value={estimatedPosShouldBe}
          />
        </Grid>
        <Grid item xs={8}>
          <div>Total Cash in POS Available</div>
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
            value={totalCashInPos}
          />
        </Grid>
        <Grid item xs={8}>
          <div>Cash Difference(+/-)</div>
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
            value={totalCashInPos - estimatedPosShouldBe}
          />
        </Grid>
        <Grid item xs={8} className="total-field">
          <div>Take Home Cash</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
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
          <div>Cash Left in POS</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            variant="filled"
            value={totalCashInPos - takeHomeCash}
          />
        </Grid>
        <Grid item xs={8}>
          <div>If Any Cash Withdrawn from Bank Today</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
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
