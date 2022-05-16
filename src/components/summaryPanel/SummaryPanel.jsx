import React from "react";
import { Paper, Divider } from "@mui/material";
import Overview from "./Overview";
import AdvanceSalary from "./AdvanceSalary";
import EodClosingDetails from "./EodClosingDetails";

class SummaryPanel extends React.Component {
  render() {
    return (
      <Paper className="panel">
        <Overview />
        <Divider />
        <AdvanceSalary />
        <EodClosingDetails />
      </Paper>
    );
  }
}

export default SummaryPanel;
