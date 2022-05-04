import React from "react";
import { TextField, Box, Paper, Grid, Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import BillsInPOS from "./BillsInPOS";
import RollsInPOS from "./RollsInPOS";
import CoinsInPOS from "./CoinsInPOS";
import {
  // selectTotalCashCountInPos,
  // setTotalCashCountInPos,
  selectTotalBillsInPosAmount,
  selectTotalRollsInPosAmount,
  selectTotalCoinsInPosAmount,
} from "../../stores/CashCountInPosStore";

const CashCountInPOS = () => {
  // const calculateTotal = () => {};
  // const dispatch = useDispatch();
  // const totalCashInPosAmount = useSelector(selectTotalCashCountInPos);
  const totalBillsAmount = useSelector(selectTotalBillsInPosAmount);
  const totalRollsAmount = useSelector(selectTotalRollsInPosAmount);
  const totalCoinsAmount = useSelector(selectTotalCoinsInPosAmount);

  // const calculateTotalCashInPosAmount = (sectionAmount) => {
  //   console.log("totalCashInPosAmount", totalCashInPosAmount);
  //   console.log("sectionAmount", sectionAmount);
  //   totalCashInPosAmount = totalCashInPosAmount + sectionAmount;
  //   dispatch(setTotalCashCountInPos(totalCashInPosAmount));
  // };

  const totalCashInPosAmount =
    totalBillsAmount + totalRollsAmount + totalCoinsAmount;

  return (
    <Paper className="panel cashCount">
      <Box className="box bills">
        <h3>Cash Count in POS</h3>
        <Grid
          container
          alignItems="center"
          rowSpacing={1}
          textAlign="right"
          columnSpacing={2}
        >
          <Grid item xs={12}>
            {/* <BillsInPOS calculateTotalAmount={calculateTotalCashInPosAmount} /> */}
            <BillsInPOS />
          </Grid>
          <Grid item xs={12}>
            {/* <RollsInPOS calculateTotalAmount={calculateTotalCashInPosAmount} /> */}
            <RollsInPOS />
          </Grid>
          <Grid item xs={12}>
            {/* <CoinsInPOS calculateTotalAmount={calculateTotalCashInPosAmount} /> */}
            <CoinsInPOS />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3} className="total-field">
            <div className="total-text">Cash in POS</div>
          </Grid>
          <Grid item xs={2}>
            <div className="equalTo"> = </div>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-size-small"
              disabled={true}
              size="small"
              variant="filled"
              value={totalCashInPosAmount}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CashCountInPOS;
