import React, { useEffect, useState } from "react";
import { TextField, Grid } from "@mui/material";

const BillsInPOS = () => {
  const [billsInPosState, setBillsInPosState] = useState({
    hundreds: 0,
    fifties: 0,
    twenties: 0,
    tens: 0,
    fives: 0,
    ones: 0,
  });
  const [totalBillsAmount, setTotalBillsAmount] = useState(0);

  useEffect(() => {
    console.log("billsInPosState", billsInPosState);
    let { hundreds, fifties, twenties, tens, fives, ones } = billsInPosState;
    let totalAmount =
      hundreds * 100 +
      fifties * 50 +
      twenties * 20 +
      tens * 10 +
      fives * 5 +
      ones * 1;

    setTotalBillsAmount(totalAmount);
  }, [billsInPosState]);

  // const calculateTotalBillsAmount = () => {
  //   console.log("billsInPosState", billsInPosState);
  //   let { hundreds, fifties, twenties, tens, fives, ones } = billsInPosState;
  //   let totalAmount =
  //     hundreds * 100 +
  //     fifties * 50 +
  //     twenties * 20 +
  //     tens * 10 +
  //     fives * 5 +
  //     ones * 1;

  //   setTotalBillsAmount(totalAmount);
  // };

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

    // calculateTotalBillsAmount();
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
        <div>100 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          value={billsInPosState.hundreds}
          onChange={(e) => {
            updateCount(100, e.target.value);
          }}
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
          value={billsInPosState.hundreds * 100}
        />
      </Grid>
      <Grid item xs={3}>
        <div>50 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          value={billsInPosState.fifties}
          onChange={(e) => {
            updateCount(50, e.target.value);
          }}
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
          value={billsInPosState.fifties * 50}
        />
      </Grid>
      <Grid item xs={3}>
        <div>20 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          value={billsInPosState.twenties}
          onChange={(e) => {
            updateCount(20, e.target.value);
          }}
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
          value={billsInPosState.twenties * 20}
        />
      </Grid>
      <Grid item xs={3}>
        <div>10 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          value={billsInPosState.tens}
          onChange={(e) => {
            updateCount(10, e.target.value);
          }}
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
          value={billsInPosState.tens * 10}
        />
      </Grid>

      <Grid item xs={3}>
        <div>5 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          value={billsInPosState.fives}
          onChange={(e) => {
            updateCount(5, e.target.value);
          }}
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
          value={billsInPosState.fives * 5}
        />
      </Grid>
      <Grid item xs={3}>
        <div>1 x</div>
      </Grid>
      <Grid item xs={3}>
        <TextField
          id="outlined-size-small"
          size="small"
          value={billsInPosState.ones}
          onChange={(e) => {
            updateCount(1, e.target.value);
          }}
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
          value={billsInPosState.ones * 1}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3} className="subTotal-field">
        <div className="total-text">Total Bills</div>
      </Grid>
      <Grid item xs={2}>
        <div className="equalTo"> = </div>
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
