import React from "react";
import { TextField, Box, Grid } from "@mui/material";

const MiscIncoming = () => {
  return (
    <Box className="box misc-incoming">
      <h3>Misc Incoming (Cash Only)</h3>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Description"
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
            placeholder="Description"
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
            placeholder="Description"
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
            placeholder="Description"
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
      </Grid>
    </Box>
  );
};

export default MiscIncoming;
