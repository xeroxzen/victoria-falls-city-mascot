import React from "react";
import "./App.css";
import firebase from "./firebase";
import { DiagnosisInput } from "./components/DiagnosisInput";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Container";
// import DataGrid from "@material-ui/core/DataGrid";
import { Table, TableHead, TableBody, TableRow } from "@material-ui/core";
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
      <div className="App">
        <header className="App-header">
          <Typography variant="h1">
            Welcome to Victoria Falls Municipality
          </Typography>
          <Typography variant="subtitle1">
            Something Interesting goes here
          </Typography>
        </header>
        <Table>
          <TableHead>Data</TableHead>
          <TableRow>
            <TableBody>
              <ol>
                {diagnosis.map((diagnose) => (
                  <li key={diagnose.id}>
                    <DiagnosisInput diagnose={diagnose} />
                  </li>
                ))}
              </ol>
            </TableBody>
          </TableRow>
        </Table>
      </div>
    </Container>
  );
}

export default App;
