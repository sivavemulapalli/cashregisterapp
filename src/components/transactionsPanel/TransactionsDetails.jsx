import React, { useEffect } from "react";
import { TextField, Box, Grid, Typography } from "@mui/material";
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
      <Typography variant="h6">Transactions Details</Typography>
      <Grid container alignItems="center" rowSpacing={0} columnSpacing={2}>
        <Grid item xs={8}>
          <Typography>Cash Transactions</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
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
          <Typography>Credit/Debit Transactions</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
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
          <Typography>EBT Transactions</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
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
          <Typography variant="subtitle1">
            Total Transaction Activity
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
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
