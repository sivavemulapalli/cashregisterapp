import React from "react";
import { TextField, Box, Grid } from "@mui/material";

const AdvanceSalary = () => {
  return (
    <Box className="box expenses-customerReturns">
      <h3>If Any Advance Salary</h3>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={2}>
        <Grid item xs={8}>
          <div>Paid Srini</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>
        <Grid item xs={8}>
          <div>Paid Ruben</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>
        <Grid item xs={8}>
          <div>Paid Marceleno</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>

        <Grid item xs={8} className="total-field">
          <div>Total Advance Payouts</div>
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

export default AdvanceSalary;
