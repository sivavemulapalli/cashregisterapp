import React, { useEffect, useState } from "react";
import { TextField, Grid } from "@mui/material";
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
    let totalAmount =
      quarters * 0.25 + dimes * 0.1 + nickels * 0.05 + cents * 0.01;

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
      rowSpacing={1}
      textAlign="right"
      columnSpacing={2}
    >
      <Grid item xs={3}>
        <div>0.25 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          onChange={(e) => updateCount("quarters", e.target.value)}
          value={coinsInPosState.quarters}
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
          value={coinsInPosState.quarters * 0.25}
        />
      </Grid>

      <Grid item xs={3}>
        <div>0.10 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          onChange={(e) => updateCount("dimes", e.target.value)}
          value={coinsInPosState.dimes}
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
          value={coinsInPosState.dimes * 0.1}
        />
      </Grid>

      <Grid item xs={3}>
        <div>0.05 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          onChange={(e) => updateCount("nickels", e.target.value)}
          value={coinsInPosState.nickels}
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
          value={coinsInPosState.nickels * 0.05}
        />
      </Grid>

      <Grid item xs={3}>
        <div>0.01 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          onChange={(e) => updateCount("cents", e.target.value)}
          value={coinsInPosState.cents}
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
          value={coinsInPosState.cents * 0.01}
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
