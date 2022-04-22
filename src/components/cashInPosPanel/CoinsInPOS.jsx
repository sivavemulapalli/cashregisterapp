import React from "react";
import { TextField, Grid } from "@mui/material";

const CoinsInPOS = () => {
  return (
    <Grid
      container
      alignItems="center"
      rowSpacing={1}
      textAlign="right"
      columnSpacing={2}
    >
      <Grid item xs={3}>
        <div>0.25 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField id="outlined-size-small" defaultValue="0" size="small" />
      </Grid>
      <Grid item xs={2}>
        <div className="equalTo"> = </div>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-size-small"
          defaultValue="0"
          size="small"
          disabled={true}
        />
      </Grid>

      <Grid item xs={3}>
        <div>0.10 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField id="outlined-size-small" defaultValue="0" size="small" />
      </Grid>
      <Grid item xs={2}>
        <div className="equalTo"> = </div>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-size-small"
          defaultValue="0"
          size="small"
          disabled={true}
        />
      </Grid>

      <Grid item xs={3}>
        <div>0.05 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField id="outlined-size-small" defaultValue="0" size="small" />
      </Grid>
      <Grid item xs={2}>
        <div className="equalTo"> = </div>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-size-small"
          defaultValue="0"
          size="small"
          disabled={true}
        />
      </Grid>

      <Grid item xs={3}>
        <div>0.01 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField id="outlined-size-small" defaultValue="0" size="small" />
      </Grid>
      <Grid item xs={2}>
        <div className="equalTo"> = </div>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-size-small"
          defaultValue="0"
          size="small"
          disabled={true}
        />
      </Grid>

      <Grid item xs={3}></Grid>
      <Grid item xs={3} className="subTotal-field">
        <div className="total-text">Total Coins</div>
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
  );
};

export default CoinsInPOS;
