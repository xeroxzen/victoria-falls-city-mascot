import React from "react";
import firebase from "./firebase";

export const DiagnosisInput = ({ diagnose }) => {
  const [phone, setPhone] = React.useState(diagnose.phone);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("userDiagnosis")
      .doc("0")
      .set({ ...diagnose, phone });
    };
    
    
  return (
    <>
      <input
        value={phone}
        onChange={(e) => {
          SVGAnimateTransformElement(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Update</button>
    </>
  );
};
