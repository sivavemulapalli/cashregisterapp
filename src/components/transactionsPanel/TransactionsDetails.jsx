import React from "react";
import { TextField, Box, Grid } from "@mui/material";

const TransactionsDetails = () => {
  return (
    <Box className="box transaction-details">
      <h3>Transaction Details</h3>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={2}>
        <Grid item xs={8}>
          <div>Cash Transactions</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>
        <Grid item xs={8}>
          <div>Credit/Debit Transactions</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>
        <Grid item xs={8}>
          <div>EBIT Transactions</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>
        <Grid item xs={8} className="total-field">
          <div>Total Transaction Activity</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            defaultValue="0"
            size="small"
            variant="filled"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionsDetails;
