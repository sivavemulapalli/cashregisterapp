import React from "react";
import { TextField, Box, Grid } from "@mui/material";

const ExpensesAndCustomerReturns = () => {
  return (
    <Box className="box expenses-customerReturns">
      <h3>Expenses + Customer Returns (Cash Only)</h3>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Expense Description"
            id="outlined-size-small"
            size="small"
          />
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Expense Description"
            id="outlined-size-small"
            size="small"
          />
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Expense Description"
            id="outlined-size-small"
            size="small"
          />
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Expense Description"
            id="outlined-size-small"
            size="small"
          />
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>

        <Grid item xs={8} className="total-field">
          <div>Total Expenses</div>
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

export default ExpensesAndCustomerReturns;
