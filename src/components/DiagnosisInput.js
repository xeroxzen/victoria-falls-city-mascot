import React from "react";
import firebase from "../firebase";

export const DiagnosisInput = ({ diagnose }) => {
  const [phone, setPhone] = React.useState(diagnose.phone);
  const [symptoms, setSymptoms] = React.useState(diagnose.symptoms);
  const [time, setTime] = React.useState(diagnose.time);
  const [ageRange, setAgeRange] = React.useState(diagnose.ageRange);
  const [gender, setGender] = React.useState(diagnose.gender);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("userDiagnosis")
      .doc(diagnose.id)
      .set({ ...diagnose, phone, symptoms, time, ageRange, gender });
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
      <input
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      <input
        value={symptoms}
        onChange={(e) => {
          setSymptoms(e.target.value);
        }}
      />
      <input
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <input
        value={ageRange}
        onChange={(e) => {
          setAgeRange(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};
