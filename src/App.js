import React from "react";
import "./App.css";
import firebase from "./firebase";
import { DiagnosisInput } from "./components/DiagnosisInput";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
// import DataGrid from "@material-ui/core/DataGrid";
// eslint-disable-next-line;
import { Table, TableHead, TableBody, TableRow } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
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
    <Container maxWidth="xd">
      <div className="App">
        <header className="App-header">
          <Typography variant="h1">
            Welcome to Victoria Falls Municipality
          </Typography>
          <Typography variant="subtitle1">
            Something Interesting goes here
          </Typography>
        </header>
        <AppBar maxWidth="xs" color="secondary">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h2">Victoria Falls Mascot</Typography>
            <Button variant="small" color="secondary">
              Home
            </Button>
            <Button variant="small" color="secondary">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Table>
          <ol>
            {diagnosis.map((diagnose) => (
              <li key={diagnose.id}>
                <DiagnosisInput diagnose={diagnose} />
              </li>
            ))}
          </ol>
        </Table>
      </div>
    </Container>
  );
}

export default App;
