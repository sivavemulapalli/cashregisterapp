import React from "react";
import { TextField, Box, Grid } from "@mui/material";

const EodClosingDetails = () => {
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
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>
        <Grid item xs={8}>
          <div>Total Cash in POS Available</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>
        <Grid item xs={8}>
          <div>Cash Difference(+/-)</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
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
            defaultValue="0"
            size="small"
            variant="filled"
          />
        </Grid>
        <Grid item xs={8} className="total-field">
          <div>Total Misc Cash Incoming</div>
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
        <Grid item xs={8}>
          <div>If Any Cash Withdrawn from Bank Today</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField id="outlined-size-small" defaultValue="0" size="small" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EodClosingDetails;
