import React, { useEffect, useState } from "react";
import { TextField, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotalCoinsInPosAmount,
  selectTotalCoinsInPosAmount,
} from "../../stores/CashCountInPosStore";

const CoinsInPOS = () => {
  const [coinsInPosState, setCoinsInPosState] = useState({
    quarters: 0,
    dimes: 0,
    nickels: 0,
    cents: 0,
  });
  const totalCoinsAmount = useSelector(selectTotalCoinsInPosAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    let { quarters, dimes, nickels, cents } = coinsInPosState;
    let totalAmount = parseFloat(
      (quarters * 0.25 + dimes * 0.1 + nickels * 0.05 + cents * 0.01).toFixed(2)
    );

    dispatch(setTotalCoinsInPosAmount(totalAmount));
  }, [coinsInPosState, dispatch]);

  const updateCount = (denomination, count) => {
    let { quarters, dimes, nickels, cents } = coinsInPosState;

    switch (denomination) {
      case "quarters": {
        quarters = count;
        break;
      }
      case "dimes": {
        dimes = count;
        break;
      }
      case "nickels": {
        nickels = count;
        break;
      }
      case "cents": {
        cents = count;
        break;
      }
      default: {
        break;
      }
    }
    const updatedState = { quarters, dimes, nickels, cents };
    setCoinsInPosState(updatedState);
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
        <Typography>0.25 x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          onChange={(e) => updateCount("quarters", e.target.value)}
          value={coinsInPosState.quarters}
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
          value={parseFloat((coinsInPosState.quarters * 0.25).toFixed(2))}
        />
      </Grid>

      <Grid item xs={3}>
        <Typography>0.10 x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          onChange={(e) => updateCount("dimes", e.target.value)}
          value={coinsInPosState.dimes}
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
          value={parseFloat((coinsInPosState.dimes * 0.1).toFixed(2))}
        />
      </Grid>

      <Grid item xs={3}>
        <Typography>0.05 x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          onChange={(e) => updateCount("nickels", e.target.value)}
          value={coinsInPosState.nickels}
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
          value={parseFloat((coinsInPosState.nickels * 0.05).toFixed(2))}
        />
      </Grid>

      <Grid item xs={3}>
        <Typography>0.01 x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          onChange={(e) => updateCount("cents", e.target.value)}
          value={coinsInPosState.cents}
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
          value={parseFloat((coinsInPosState.cents * 0.01).toFixed(2))}
        />
      </Grid>

      <Grid item xs={3}></Grid>
      <Grid item xs={3} className="subTotal-field">
        <div className="total-text">
          <Typography>Total Coins</Typography>
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
          value={totalCoinsAmount}
        />
      </Grid>
    </Grid>
  );
};

export default CoinsInPOS;
