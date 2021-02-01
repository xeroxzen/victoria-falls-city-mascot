import React from "react";
import "./App.css";
import firebase from "./firebase";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import DiagnosisData from "./components/DiagnosisData";
// import RecommendationData from "./components/RecommendationData";
// import ComplaintsData from "./components/ComplaintsData";
import { InteractionsInput } from "./components/InteractionsInput";
import Admin from "./components/Admin";
import Container from "@material-ui/core/Container";
// import Paper from "@material-ui/core/Paper";

import "@fontsource/roboto";

import {
  // makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

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
      main: orange[500],
    },
  },
});

function App() {
  const [diagnosis, setDiagnosis] = React.useState([]);
  const [complaints, setComplaints] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("userDiagnosis").get();
      setDiagnosis(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const complaintsRef = await db.collection("Complaints").get();
      setComplaints(
        complaintsRef.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}>
          <div className="App">
            <header className="App-header">
              <NavBar />
              <Admin />
              {/* <FetchData /> */}
              <ul>
                {complaints.map((complaint) => (
                  <li key={complaint.id}>
                    <InteractionsInput interaction={complaint} />
                  </li>
                ))}

                {diagnosis.map((diagnose) => (
                  <li key={diagnose.id}>
                    <InteractionsInput interaction={diagnose} />
                  </li>
                ))}
              </ul>
            </header>
            <Footer />
          </div>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
}

export default App;
