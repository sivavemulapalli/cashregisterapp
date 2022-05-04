import React, { useState, useEffect } from "react";
import { TextField, Box, Grid } from "@mui/material";

const Overview = () => {
  const [cashInPosFromLastNight, setCashInPosFromLastNight] = useState(0);

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
            value={cashInPosFromLastNight}
            onChange={(e) => setCashInPosFromLastNight(e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <div>Total Cash Transaction Today</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" size="small" />
        </Grid>
        <Grid item xs={8}>
          <div>Estimated Cash</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" size="small" />
        </Grid>
        <Grid item xs={8}>
          <div>Cash Expenses Today</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" size="small" />
        </Grid>
        <Grid item xs={8} className="total-field">
          <div>Total Misc Cash Incoming</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" size="small" variant="filled" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
