import React from "react";
import "./App.css";
import firebase from "./firebase";
import { DiagnosisInput } from "./components/DiagnosisInput";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Container";
// import DataGrid from "@material-ui/core/DataGrid";
import Table from "@material-ui/core/Table";
import "@fontsource/roboto";

function App() {
  // userDiagnosis state
  const [diagnosis, setDiagnosis] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("userDiagnosis").get();
      setDiagnosis(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <Container fixed>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      <div className="App">
        <header className="App-header">
          <Typography variant="h1">
            Welcome to Victoria Falls Municipality
          </Typography>
        </header>
        <Table>
          <ul>
            {diagnosis.map((diagnose) => (
              <li key={diagnose.id}>
                <DiagnosisInput diagnose={diagnose} />
              </li>
            ))}
          </ul>
        </Table>
      </div>
    </Container>
  );
}

export default App;
