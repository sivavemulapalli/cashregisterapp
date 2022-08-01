import React, { useEffect } from "react";
import {
  TextField,
  Box,
  Paper,
  Grid,
  Divider,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import BillsInPOS from "./BillsInPOS";
import RollsInPOS from "./RollsInPOS";
import CoinsInPOS from "./CoinsInPOS";
import {
  selectTotalCashCountInPos,
  setTotalCashCountInPos,
  selectTotalBillsInPosAmount,
  selectTotalRollsInPosAmount,
  selectTotalCoinsInPosAmount,
} from "../../stores/CashCountInPosStore";

const CashCountInPOS = () => {
  const dispatch = useDispatch();
  const totalCashInPosAmount = useSelector(selectTotalCashCountInPos);
  const totalBillsAmount = useSelector(selectTotalBillsInPosAmount);
  const totalRollsAmount = useSelector(selectTotalRollsInPosAmount);
  const totalCoinsAmount = useSelector(selectTotalCoinsInPosAmount);

  useEffect(() => {
    dispatch(
      setTotalCashCountInPos(
        totalBillsAmount + totalRollsAmount + totalCoinsAmount
      )
    );
  }, [totalBillsAmount, totalRollsAmount, totalCoinsAmount, dispatch]);

  return (
    <Paper className="panel cashCount">
      <Typography variant="h6">Cash Count in POS</Typography>
      <Grid
        container
        alignItems="center"
        rowSpacing={1}
        textAlign="right"
        columnSpacing={2}
      >
        <Grid item xs={12}>
          <BillsInPOS />
        </Grid>
        <Grid item xs={12}>
          <RollsInPOS />
        </Grid>
        <Grid item xs={12}>
          <CoinsInPOS />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4} className="total-field">
          <Typography variant="subtitle1">Cash in POS</Typography>
        </Grid>
        <Grid item xs={2} className="equalTo">
          <Typography>{"="}</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            hiddenLabel
            id="outlined-size-small"
            disabled={true}
            size="small"
            variant="filled"
            value={totalCashInPosAmount}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CashCountInPOS;
