import React from "react";
import "./App.css";
import firebase from "./firebase";
import { DiagnosisInput } from "./components/DiagnosisInput";

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
    <ul>
      {diagnosis.map((diagnose) => (
        <li key={diagnose.phone}>
          <DiagnosisInput diagnose={diagnose} />
        </li>
      ))}
    </ul>
  );
}

export default App;
