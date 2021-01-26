import React from "react";
import firebase from "../firebase";

export const DiagnosisInput = ({ diagnose }) => {
  const [phone, setPhone] = React.useState(diagnose.phone);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("userDiagnosis")
      .doc(diagnose.id)
      .set({ ...diagnose, phone });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("userDiagnosis").doc(diagnose.id).delete();
  };

  return (
    <>
      <input
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};
