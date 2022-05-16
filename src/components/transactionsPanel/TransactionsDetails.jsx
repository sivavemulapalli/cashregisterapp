import React, { useEffect } from "react";
import { TextField, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotalTransactionsAmount,
  setCashTransactionsAmount,
  setCardTransactionsAmount,
  setEbtTransactionsAmount,
  selectCardTransactionsAmount,
  selectCashTransactionsAmount,
  selectEbtTransactionsAmount,
  selectTotalTransactionsAmount,
} from "../../stores/TransactionsStore";

const TransactionsDetails = () => {
  const cashTransactionsAmount = useSelector(selectCashTransactionsAmount);
  const cardTransactionsAmount = useSelector(selectCardTransactionsAmount);
  const ebtTransactionsAmount = useSelector(selectEbtTransactionsAmount);
  const totalTransactionAmount = useSelector(selectTotalTransactionsAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setTotalTransactionsAmount(
        parseFloat(
          (
            cashTransactionsAmount +
            cardTransactionsAmount +
            ebtTransactionsAmount
          ).toFixed(2)
        )
      )
    );
  }, [
    cashTransactionsAmount,
    cardTransactionsAmount,
    ebtTransactionsAmount,
    dispatch,
  ]);

  const updateTransactionAmount = (setTransactionTypeAmount, value) => {
    if (
      value.length > 0 &&
      !isNaN(parseFloat(value)) &&
      typeof parseFloat(value) === "number"
    ) {
      dispatch(setTransactionTypeAmount(parseFloat(value)));
    } else {
      dispatch(setTransactionTypeAmount(0));
    }
  };

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
            onChange={(e) =>
              updateTransactionAmount(setCashTransactionsAmount, e.target.value)
            }
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
            onChange={(e) =>
              updateTransactionAmount(setCardTransactionsAmount, e.target.value)
            }
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
            onChange={(e) =>
              updateTransactionAmount(setEbtTransactionsAmount, e.target.value)
            }
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
