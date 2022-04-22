import React from "react";
import { TextField, Grid } from "@mui/material";

const RollsInPOS = () => {
  return (
    <Grid
      container
      alignItems="center"
      rowSpacing={1}
      textAlign="right"
      columnSpacing={2}
    >
      <Grid item xs={3}>
        <div>QR x</div>
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
        <div>DR x</div>
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
        <div>NR x</div>
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
        <div>PR x</div>
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
        <div className="total-text">Total Rolls</div>
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

export default RollsInPOS;
