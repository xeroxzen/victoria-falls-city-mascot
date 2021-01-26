import React from "react";
import "./App.css";
import firebase from "./firebase";

function App() {
  // userDiagnosis state
  const [userDiagnosis, setUserDiagnosis] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("userDiagnosis").get();
      setUserDiagnosis(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <ul>
      {userDiagnosis.map((diagnosis) => (
        <li key={diagnosis.phone}>{diagnosis.phone}</li>
      ))}
    </ul>
  );
}

export default App;
