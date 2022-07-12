import React, { useEffect, useState } from "react";
import { TextField, Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotalExpensesAmount,
  selectTotalExpensesAmount,
} from "../../stores/ExpensesStore";

const ExpensesAndCustomerReturns = () => {
  const [expenses, setExpenses] = useState([
    { description: "", amount: 0 },
    { description: "", amount: 0 },
    { description: "", amount: 0 },
    { description: "", amount: 0 },
  ]);
  const dispatch = useDispatch();
  const expenseTotal = useSelector(selectTotalExpensesAmount);

  useEffect(() => {
    let totalExpenseAmount = 0;
    expenses.forEach((expense) => {
      totalExpenseAmount = totalExpenseAmount + expense.amount;
    });

    dispatch(setTotalExpensesAmount(parseFloat(totalExpenseAmount.toFixed(2))));
  }, [expenses, dispatch]);

  const updateDescription = (index, value) => {
    let newExpenses = [...expenses];
    newExpenses[index].description = value;
    setExpenses(newExpenses);
  };

  const updateAmount = (index, value) => {
    let newExpenses = [...expenses];
    if (
      value.length > 0 &&
      !isNaN(parseFloat(value)) &&
      typeof parseFloat(value) === "number"
    ) {
      newExpenses[index].amount = parseFloat(value);
    } else {
      newExpenses[index].amount = 0;
    }
    setExpenses(newExpenses);
  };

  return (
    <Box className="box expenses-customerReturns">
      <Typography variant="h6">
        Expenses + Customer Returns (Cash Only)
      </Typography>
      <Grid container alignItems="center" rowSpacing={0} columnSpacing={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Expense Description"
            id="outlined-size-small"
            size="small"
            value={expenses[0].description}
            onChange={(e) => updateDescription(0, e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            value={expenses[0].amount}
            onChange={(e) => updateAmount(0, e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Expense Description"
            id="outlined-size-small"
            size="small"
            value={expenses[1].description}
            onChange={(e) => updateDescription(1, e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            value={expenses[1].amount}
            onChange={(e) => updateAmount(1, e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Expense Description"
            id="outlined-size-small"
            size="small"
            value={expenses[2].description}
            onChange={(e) => updateDescription(2, e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            value={expenses[2].amount}
            onChange={(e) => updateAmount(2, e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Expense Description"
            id="outlined-size-small"
            size="small"
            value={expenses[3].description}
            onChange={(e) => updateDescription(3, e.target.value)}
          />
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            type="number"
            value={expenses[3].amount}
            onChange={(e) => updateAmount(3, e.target.value)}
          />
        </Grid>

        <Grid item xs={8} className="total-field">
          <Typography variant="subtitle1">Total Expenses</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography>{"="}</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            hiddenLabel
            id="outlined-size-small"
            disabled={true}
            size="small"
            variant="filled"
            value={expenseTotal}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExpensesAndCustomerReturns;
