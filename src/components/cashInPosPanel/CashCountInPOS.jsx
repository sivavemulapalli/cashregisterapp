import React from "react";
import { TextField, Box, Paper, Grid, Divider } from "@mui/material";
import BillsInPOS from "./BillsInPOS";
import RollsInPOS from "./RollsInPOS";
import CoinsInPOS from "./CoinsInPOS";

const CashCountInPOS = () => {
  // const calculateTotal = () => {};

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
              defaultValue="0"
              disabled={true}
              size="small"
              variant="filled"
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CashCountInPOS;
