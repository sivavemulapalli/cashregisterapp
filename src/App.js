// import logo from './logo.svg';
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import Grid from "@mui/material/Grid";
import TransactionsPanel from "./components/transactionsPanel/TransactionsPanel";
import SummaryPanel from "./components/summaryPanel/SummaryPanel";
import CashCountInPOS from "./components/cashInPosPanel/CashCountInPOS";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ liked: true });
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }
    return (
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
    );
  }
}

export default App;
