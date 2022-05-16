import React, { useState, useEffect } from "react";
import { TextField, Box, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setTotalAdvanceSalaryAmount,
  selectTotalAdvanceSalaryAmount,
} from "../../stores/AdvanceSalaryStore";

const AdvanceSalary = () => {
  const [advanceSalary, setAdvanceSalary] = useState([
    { description: "", amount: 0 },
    { description: "", amount: 0 },
    { description: "", amount: 0 },
  ]);

  const dispatch = useDispatch();
  const totalAdvanceSalary = useSelector(selectTotalAdvanceSalaryAmount);

  // const [totalAdvanceSalary, setTotalAdvanceSalary] = useState(0);

  useEffect(() => {
    let totalAdvanceSalary = 0;
    advanceSalary.forEach((advanceSalary) => {
      totalAdvanceSalary = totalAdvanceSalary + advanceSalary.amount;
    });
    dispatch(
      setTotalAdvanceSalaryAmount(parseFloat(totalAdvanceSalary.toFixed(2)))
    );
  }, [advanceSalary, dispatch]);

  const updateDescription = (index, value) => {
    const newAdvanceSalary = [...advanceSalary];
    newAdvanceSalary[index].description = value;
    setAdvanceSalary(newAdvanceSalary);
  };

  const updateAmount = (index, value) => {
    const newAdvanceSalary = [...advanceSalary];
    if (
      value.length > 0 &&
      !isNaN(parseFloat(value)) &&
      typeof parseFloat(value) === "number"
    ) {
      newAdvanceSalary[index].amount = parseFloat(value);
    } else {
      newAdvanceSalary[index].amount = 0;
    }
    setAdvanceSalary(newAdvanceSalary);
  };

  return (
    <Box className="box expenses-customerReturns">
      <h3>If Any Advance Salary</h3>
      <Grid container alignItems="center" rowSpacing={1} columnSpacing={2}>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Description"
            id="outlined-size-small"
            size="small"
            value={advanceSalary[0].description}
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
            type="number"
            value={advanceSalary[0].amount}
            onChange={(e) => updateAmount(0, e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Description"
            id="outlined-size-small"
            size="small"
            value={advanceSalary[1].description}
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
            type="number"
            value={advanceSalary[1].amount}
            onChange={(e) => updateAmount(1, e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            fullWidth
            hiddenLabel={true}
            color="info"
            placeholder="Description"
            id="outlined-size-small"
            size="small"
            value={advanceSalary[2].description}
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
            type="number"
            value={advanceSalary[2].amount}
            onChange={(e) => updateAmount(2, e.target.value)}
          />
        </Grid>

        <Grid item xs={8} className="total-field">
          <div>Total Advance Payouts</div>
        </Grid>
        <Grid item xs={1}>
          <div>{"="}</div>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-size-small"
            size="small"
            variant="filled"
            type="number"
            disabled={true}
            value={totalAdvanceSalary}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdvanceSalary;
