import React from "react";
import "./App.css";
// import firebase from "./firebase";
// import { DiagnosisInput } from "./components/DiagnosisInput";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DiagnosisData from "./components/DiagnosisData";
import Admin from "./components/Admin";
// import { CustomizedTables } from "./components/CustomizedTables";
import Container from "@material-ui/core/Container";
// import DataGrid from "@material-ui/core/DataGrid";
// eslint-disable-next-line;
// import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import "@fontsource/roboto";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: "white",
    padding: "5px 30px",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">
              <NavBar />
              <Admin />
              <DiagnosisData />
            </header>
            <Footer />
          </div>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
}

export default App;
