import React from "react";
import "./App.css";
import PermanentDrawerLeft from "./components/SideNavBar";
import Footer from "./components/Footer";

import Container from "@material-ui/core/Container";
import "@fontsource/roboto";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#34495E", //cyan[400],
    },
    secondary: {
      main: "#0097a7",
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <div className="App">
            <PermanentDrawerLeft />
            <Footer />
          </div>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
}

export default App;
