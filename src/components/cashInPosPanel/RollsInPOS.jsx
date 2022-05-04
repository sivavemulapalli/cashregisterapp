import React, { useState, useEffect } from "react";
import { TextField, Grid } from "@mui/material";
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
      rowSpacing={1}
      textAlign="right"
      columnSpacing={2}
    >
      <Grid item xs={3}>
        <div>QR x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          onChange={(e) => updateCount("QR", e.target.value)}
          value={rollsInPosState.QRs}
        />
      </Grid>
      <Grid item xs={2}>
        <div className="equalTo"> = </div>
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
        <div>DR x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          onChange={(e) => updateCount("DR", e.target.value)}
          value={rollsInPosState.DRs}
        />
      </Grid>
      <Grid item xs={2}>
        <div className="equalTo"> = </div>
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
        <div>NR x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          onChange={(e) => updateCount("NR", e.target.value)}
          value={rollsInPosState.NRs}
        />
      </Grid>
      <Grid item xs={2}>
        <div className="equalTo"> = </div>
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
        <div>PR x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          onChange={(e) => updateCount("PR", e.target.value)}
          value={rollsInPosState.PRs}
        />
      </Grid>
      <Grid item xs={2}>
        <div className="equalTo"> = </div>
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
        <div className="total-text">Total Rolls</div>
      </Grid>
      <Grid item xs={2}>
        <div className="equalTo"> = </div>
      </Grid>
      <Grid item xs={4}>
        <TextField
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
