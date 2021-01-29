import React from "react";
import { Component } from "react";
import firebase from "../firebase";
import { DiagnosisInput } from "./DiagnosisInput";

function DiagnosisData() {
  // userDiagnosis state
  const [diagnosis, setDiagnosis] = React.useState([]);
  // const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("userDiagnosis").get();
      setDiagnosis(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <div>
      <ol>
        {diagnosis.map((diagnose) => (
          <li key={diagnose.id}>
            <DiagnosisInput diagnose={diagnose} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default DiagnosisData;
