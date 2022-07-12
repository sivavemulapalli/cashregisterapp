import React, { useEffect, useState } from "react";
import { TextField, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotalBillsInPosAmount,
  selectTotalBillsInPosAmount,
} from "../../stores/CashCountInPosStore";

const BillsInPOS = ({ calculateTotalAmount }) => {
  const [billsInPosState, setBillsInPosState] = useState({
    hundreds: 0,
    fifties: 0,
    twenties: 0,
    tens: 0,
    fives: 0,
    ones: 0,
  });
  const totalBillsAmount = useSelector(selectTotalBillsInPosAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    let { hundreds, fifties, twenties, tens, fives, ones } = billsInPosState;
    let totalAmount =
      hundreds * 100 +
      fifties * 50 +
      twenties * 20 +
      tens * 10 +
      fives * 5 +
      ones * 1;

    dispatch(setTotalBillsInPosAmount(totalAmount));
    // calculateTotalAmount(totalAmount);
  }, [billsInPosState, dispatch]);

  const updateCount = (denomination, count) => {
    let { hundreds, fifties, twenties, tens, fives, ones } = billsInPosState;

    switch (denomination) {
      case 100: {
        hundreds = count;
        break;
      }
      case 50: {
        fifties = count;
        break;
      }
      case 20: {
        twenties = count;
        break;
      }
      case 10: {
        tens = count;
        break;
      }
      case 5: {
        fives = count;
        break;
      }
      case 1: {
        ones = count;
        break;
      }
      default: {
        break;
      }
    }
    const updatedState = { hundreds, fifties, twenties, tens, fives, ones };
    setBillsInPosState(updatedState);
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
        <Typography>100 x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          value={billsInPosState.hundreds}
          onChange={(e) => {
            updateCount(100, e.target.value);
          }}
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
          value={billsInPosState.hundreds * 100}
        />
      </Grid>
      <Grid item xs={3}>
        <Typography>50 x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          value={billsInPosState.fifties}
          onChange={(e) => {
            updateCount(50, e.target.value);
          }}
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
          value={billsInPosState.fifties * 50}
        />
      </Grid>
      <Grid item xs={3}>
        <Typography>20 x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          value={billsInPosState.twenties}
          onChange={(e) => {
            updateCount(20, e.target.value);
          }}
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
          value={billsInPosState.twenties * 20}
        />
      </Grid>
      <Grid item xs={3}>
        <Typography>10 x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          value={billsInPosState.tens}
          onChange={(e) => {
            updateCount(10, e.target.value);
          }}
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
          value={billsInPosState.tens * 10}
        />
      </Grid>

      <Grid item xs={3}>
        <Typography>5 x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          value={billsInPosState.fives}
          onChange={(e) => {
            updateCount(5, e.target.value);
          }}
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
          value={billsInPosState.fives * 5}
        />
      </Grid>
      <Grid item xs={3}>
        <Typography>1 x</Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          type="number"
          value={billsInPosState.ones}
          onChange={(e) => {
            updateCount(1, e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={2} className="equalTo">
        <Typography>{"="}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>
          <TextField
            id="outlined-size-small"
            size="small"
            disabled={true}
            value={billsInPosState.ones * 1}
          />
        </Typography>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3} className="subTotal-field">
        <div className="total-text">
          <Typography>Total Bills</Typography>
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
          value={totalBillsAmount}
        />
      </Grid>
    </Grid>
  );
};

export default BillsInPOS;
