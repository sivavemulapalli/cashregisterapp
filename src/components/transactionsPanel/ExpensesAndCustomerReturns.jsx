import React, { useEffect, useState } from "react";
import { TextField, Box, Grid } from "@mui/material";
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
      totalExpenseAmount = totalExpenseAmount + parseFloat(expense.amount);
    });

    dispatch(setTotalExpensesAmount(totalExpenseAmount));
  }, [expenses, dispatch]);

  // const [expenseTotal, setExpenseTotal] = useState(0);

  const updateDescription = (index, value) => {
    let newExpenses = [...expenses];
    newExpenses[index].description = value;
    setExpenses(newExpenses);
  };

  const updateAmount = (index, value) => {
    let newExpenses = [...expenses];
    newExpenses[index].amount = value.length > 0 ? value : "0";
    setExpenses(newExpenses);
  };

  return (
    <Box className="box expenses-customerReturns">
      <h3>Expenses + Customer Returns (Cash Only)</h3>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={2}>
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
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
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
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
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
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
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
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            value={expenses[3].amount}
            onChange={(e) => updateAmount(3, e.target.value)}
          />
        </Grid>

        <Grid item xs={8} className="total-field">
          <div>Total Expenses</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
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
