import React, { useState, useEffect } from "react";
import { TextField, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotalIncomingCashAmount,
  selectTotalIncomingCashAmount,
} from "../../stores/IncomingCashStore";

const MiscIncoming = () => {
  const [incomingCash, setIncomingCash] = useState([
    { description: "", amount: 0 },
    { description: "", amount: 0 },
    { description: "", amount: 0 },
    { description: "", amount: 0 },
  ]);
  const dispatch = useDispatch();
  const incomingCashTotal = useSelector(selectTotalIncomingCashAmount);

  useEffect(() => {
    let totalIncomingCashAmount = 0;
    incomingCash.forEach((incomingCash) => {
      totalIncomingCashAmount =
        totalIncomingCashAmount + parseFloat(incomingCash.amount);
    });
    console.log("totalIncomingCash", totalIncomingCashAmount.toFixed(2));

    dispatch(
      setTotalIncomingCashAmount(parseFloat(totalIncomingCashAmount.toFixed(2)))
    );
  }, [incomingCash, dispatch]);

  const updateDescription = (index, value) => {
    let newIncomingCash = [...incomingCash];
    newIncomingCash[index].description = value;
    setIncomingCash(newIncomingCash);
  };

  const updateAmount = (index, value) => {
    let newIncomingCash = [...incomingCash];
    if (
      value.length > 0 &&
      !isNaN(parseFloat(value)) &&
      typeof parseFloat(value) === "number"
    ) {
      newIncomingCash[index].amount = parseFloat(value);
    } else {
      newIncomingCash[index].amount = 0;
    }

    setIncomingCash(newIncomingCash);
  };

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
            value={incomingCash[0].description}
            onChange={(e) => updateDescription(0, e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            value={incomingCash[0].amount}
            onChange={(e) => updateAmount(0, e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Description"
            id="outlined-size-small"
            size="small"
            value={incomingCash[1].description}
            onChange={(e) => updateDescription(1, e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            value={incomingCash[1].amount}
            onChange={(e) => updateAmount(1, e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Description"
            id="outlined-size-small"
            size="small"
            value={incomingCash[2].description}
            onChange={(e) => updateDescription(2, e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            value={incomingCash[2].amount}
            onChange={(e) => updateAmount(2, e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Description"
            id="outlined-size-small"
            size="small"
            value={incomingCash[3].description}
            onChange={(e) => updateDescription(3, e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            value={incomingCash[3].amount}
            onChange={(e) => updateAmount(3, e.target.value)}
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
            size="small"
            variant="filled"
            disabled={true}
            value={incomingCashTotal}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MiscIncoming;
