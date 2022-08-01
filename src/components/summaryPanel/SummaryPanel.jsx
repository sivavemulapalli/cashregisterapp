import React from "react";
import { Paper, Divider } from "@mui/material";
import Overview from "./Overview";
import AdvanceSalary from "./AdvanceSalary";
import EodClosingDetails from "./EodClosingDetails";

class SummaryPanel extends React.Component {
  render() {
    return (
      <Paper className="panel summary">
        <Overview />
        <Divider className="section-divider" />
        <AdvanceSalary />
        <Divider className="section-divider" />
        <EodClosingDetails />
      </Paper>
    );
  }
}

export default SummaryPanel;
