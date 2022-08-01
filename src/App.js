import React from "react";
import Grid from "@mui/material/Grid";
import TransactionsPanel from "./components/transactionsPanel/TransactionsPanel";
import SummaryPanel from "./components/summaryPanel/SummaryPanel";
import CashCountInPOS from "./components/cashInPosPanel/CashCountInPOS";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

let theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiFab: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTable: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: "dense",
      },
    },
  },
  typography: {
    htmlFontSize: 52,
    fontSize: 20,
    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.25,
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.25,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <CashCountInPOS />
        </Grid>
        <Grid item sm={12} md={4}>
          <TransactionsPanel />
        </Grid>
        <Grid item sm={12} md={4}>
          <SummaryPanel />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
