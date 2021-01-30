import React from "react";
import firebase from "../firebase";
import { FetchInput } from "./FetchInput";

function FetchData() {
  // userDiagnosis state
  const [diagnosis, setDiagnosis] = React.useState([]);
  const [complaints, setComplaints] = React.useState([]);
  const [recommendations, setRecommendations] = React.useState([]);

  // for user diagnosis
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("userDiagnosis").get();
      setDiagnosis(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  //for recommendations
  React.useEffect(() => {
    const getData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Recommendation").get();
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
      const data = await db.collection("Complaints").get();
      setComplaints(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    readData();
  }, []);

  return (
    <div>
      <ol>
        {diagnosis.map((diagnose) => (
          <li key={diagnose.id}>
            <FetchInput diagnose={diagnose} />
          </li>
        ))}
      </ol>

      <ol>
        {recommendations.map((recommend) => (
          <li key={recommend.id}>
            <FetchInput recommend={recommend} />
          </li>
        ))}
      </ol>
      <ol>
        {complaints.map((complaint) => (
          <li key={complaint.id}>
            <FetchInput complaint={complaint} />
          </li>
        ))}
      </ol>
    </div>
    // end here
  );
}

export default FetchData;
