import React, { useState, useEffect } from "react";
import { TextField, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotalRollsInPosAmount,
  selectTotalRollsInPosAmount,
} from "../../stores/CashCountInPosStore";

const RollsInPOS = () => {
  const [rollsInPosState, setRollsInPosState] = useState({
    QRs: 0,
    DRs: 0,
    NRs: 0,
    PRs: 0,
  });
  const totalRollsAmount = useSelector(selectTotalRollsInPosAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    let { QRs, DRs, NRs, PRs } = rollsInPosState;
    let totalAmount = QRs * 10 + DRs * 5 + NRs * 2 + PRs * 0.5;

    dispatch(setTotalRollsInPosAmount(totalAmount));
  }, [rollsInPosState, dispatch]);

  const updateCount = (denomination, count) => {
    let { QRs, DRs, NRs, PRs } = rollsInPosState;

    switch (denomination) {
      case "QR": {
        QRs = count;
        break;
      }
      case "DR": {
        DRs = count;
        break;
      }
      case "NR": {
        NRs = count;
        break;
      }
      case "PR": {
        PRs = count;
        break;
      }
      default: {
        break;
      }
    }
    const updatedState = { QRs, DRs, NRs, PRs };
    setRollsInPosState(updatedState);
  };

  return (
    <Grid
      container
      alignItems="center"
      rowSpacing={0}
      textAlign="right"
      columnSpacing={2}
    >
      <Grid item xs={3}>
        <Typography>QR x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          onChange={(e) => updateCount("QR", e.target.value)}
          value={rollsInPosState.QRs}
        />
      </Grid>
      <Grid item xs={2} className="equalTo">
        <Typography>{"="}</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-size-small"
          size="small"
          disabled={true}
          value={rollsInPosState.QRs * 10}
        />
      </Grid>
      <Grid item xs={3}>
        <Typography>DR x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          onChange={(e) => updateCount("DR", e.target.value)}
          value={rollsInPosState.DRs}
        />
      </Grid>
      <Grid item xs={2} className="equalTo">
        <Typography>{"="}</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-size-small"
          size="small"
          disabled={true}
          value={rollsInPosState.DRs * 5}
        />
      </Grid>
      <Grid item xs={3}>
        <Typography>NR x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          onChange={(e) => updateCount("NR", e.target.value)}
          value={rollsInPosState.NRs}
        />
      </Grid>
      <Grid item xs={2} className="equalTo">
        <Typography>{"="}</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-size-small"
          size="small"
          disabled={true}
          value={rollsInPosState.NRs * 2}
        />
      </Grid>
      <Grid item xs={3}>
        <Typography>PR x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          onChange={(e) => updateCount("PR", e.target.value)}
          value={rollsInPosState.PRs}
        />
      </Grid>
      <Grid item xs={2} className="equalTo">
        <Typography>{"="}</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="outlined-size-small"
          size="small"
          disabled={true}
          value={rollsInPosState.PRs * 0.5}
        />
      </Grid>

      <Grid item xs={3}></Grid>
      <Grid item xs={3} className="subTotal-field">
        <div className="total-text">
          <Typography>Total Rolls</Typography>
        </div>
      </Grid>
      <Grid item xs={2} className="equalTo">
        <Typography>{"="}</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          hiddenLabel
          id="outlined-size-small"
          disabled={true}
          size="small"
          variant="filled"
          value={totalRollsAmount}
        />
      </Grid>
    </Grid>
  );
};

export default RollsInPOS;
