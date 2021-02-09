import React from "react";
import firebase from "../../firebase";
import { ComplaintsInput } from "./ComplaintsInput";

function ComplaintsData() {
  // userDiagnosis state
  const [complaints, setComplaints] = React.useState([]);

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
    <div>
      <ol>
        {complaints.map((complaint) => (
          <li key={complaint.id}>
            <ComplaintsInput interaction={complaint} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ComplaintsData;
