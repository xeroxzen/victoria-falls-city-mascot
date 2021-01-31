import React from "react";
import firebase from "../firebase";
import { InteractionsInput } from "./InteractionsInput";

function InteractionsData() {
  // userDiagnosis state
  const [diagnosis, setDiagnosis] = React.useState([]);
  const [complaints, setComplaints] = React.useState([]);
  const [recommendations, setRecommendations] = React.useState([]);

  // for user diagnosis
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("interactions").get();
      setDiagnosis(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  //for recommendations
  React.useEffect(() => {
    const getData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("interactions").get();
      setRecommendations(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getData();
  }, []);

  //for complaints
  React.useEffect(() => {
    const readData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("interactions").get();
      setComplaints(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    readData();
  }, []);

  return (
    <div>
      <ol>
        {diagnosis.map((diagnose) => (
          <li key={diagnose.id}>
            <InteractionsInput diagnose={diagnose} />
          </li>
        ))}
      </ol>
      <br />
      <ol>
        {recommendations.map((recommend) => (
          <li key={recommend.id}>
            <InteractionsInput recommend={recommend} />
          </li>
        ))}
      </ol>
      <br />
      <ol>
        {complaints.map((complaint) => (
          <li key={complaint.id}>
            <InteractionsInput complaint={complaint} />
          </li>
        ))}
      </ol>
    </div>
    // end here
  );
}

export default InteractionsData;
