import React, { useState, useEffect } from "react";
import { TextField, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotalTransactionsAmount,
  selectTotalTransactionsAmount,
} from "../../stores/TransactionsStore";

const TransactionsDetails = () => {
  const [cashTransactionsAmount, setCashTransactionsAmount] = useState(0);
  const [cardTransactionsAmount, setCardTransactionsAmount] = useState(0);
  const [ebtTransactionsAmount, setEbtTransactionsAmount] = useState(0);
  // const [totalTransactionAmount, setTotalTransactionAmount] = useState(0);
  const totalTransactionAmount = useSelector(selectTotalTransactionsAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("cashTransacttionsAmount", cashTransactionsAmount);
    console.log("typeof cashTransactionsAmount", typeof cashTransactionsAmount);
    console.log("cardTransactionsAmount", cardTransactionsAmount);
    console.log("typeof cardTransactionsAmount", typeof cardTransactionsAmount);
    dispatch(
      setTotalTransactionsAmount(
        cashTransactionsAmount + cardTransactionsAmount + ebtTransactionsAmount
      )
    );
  }, [
    cashTransactionsAmount,
    cardTransactionsAmount,
    ebtTransactionsAmount,
    dispatch,
  ]);

  return (
    <Box className="box transaction-details">
      <h3>Transactions Details</h3>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={2}>
        <Grid item xs={8}>
          <div>Cash Transactions</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            onChange={(e) => {
              return e.target.value > 0
                ? setCashTransactionsAmount(parseInt(e.target.value))
                : setCashTransactionsAmount(0);
            }}
            value={cashTransactionsAmount}
          />
        </Grid>
        <Grid item xs={8}>
          <div>Credit/Debit Transactions</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            onChange={(e) => {
              console.log("e.target.value", e.target.value);
              console.log("e.target.value", typeof e.target.value);
              console.log("e.target.value.length", e.target.value.length);

              return e.target.value > 0
                ? setCardTransactionsAmount(parseInt(e.target.value))
                : setCardTransactionsAmount(0);
            }}
            value={cardTransactionsAmount}
          />
        </Grid>
        <Grid item xs={8}>
          <div>EBT Transactions</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            onChange={(e) => {
              return e.target.value > 0
                ? setEbtTransactionsAmount(parseInt(e.target.value))
                : setEbtTransactionsAmount(0);
            }}
            value={ebtTransactionsAmount}
          />
        </Grid>
        <Grid item xs={8} className="total-field">
          <div>Total Transaction Activity</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            hiddenLabel
            id="outlined-size-small"
            size="small"
            variant="filled"
            disabled={true}
            value={totalTransactionAmount}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TransactionsDetails;
