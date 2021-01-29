import React from "react";
import { Component } from "react";
import firebase from "../firebase";
import { DiagnosisInput } from "./DiagnosisInput";

function ComplaintsData() {
  // userDiagnosis state
  const [complaints, setComplaints] = React.useState([]);
  // const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Complaints").get();
      setComplaints(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <div>
      <ol>
        {complaints.map((complaint) => (
          <li key={complaint.id}>
            <ComplaintsInput complaint={complaint} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ComplaintsData;
