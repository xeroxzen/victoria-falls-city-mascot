import React from "react";
import "./App.css";
// import NavBar from "./components/NavBar";
// import MiniDrawer from "./components/SideBar";
import PermanentDrawerLeft from "./components/SideNavBar";
import Footer from "./components/Footer";
// import DiagnosisData from "./components/DiagnosisData";
// import RecommendationData from "./components/RecommendationData";
// import ComplaintsData from "./components/ComplaintsData";
// import Admin from "./components/Admin";
// import DiagnosisTable from "./components/DiagnosisTable";
import Container from "@material-ui/core/Container";
import "@fontsource/roboto";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import teal from "@material-ui/core/colors/teal";

// import {
//   // makeStyles,
//   ThemeProvider,
//   createMuiTheme,
// } from "@material-ui/core/styles";
// import { orange, dark } from "@material-ui/core/colors";
// import purple from "material-ui/colors/purple";

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
//     border: 0,
//     marginBottom: 15,
//     borderRadius: 15,
//     color: "white",
//     padding: "5px 30px",
//   },
// });

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

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#2E4053",
//     },
//   },
// });

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
