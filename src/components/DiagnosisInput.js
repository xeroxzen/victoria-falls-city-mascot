import React from "react";
import firebase from "../firebase";
import Button from "@material-ui/core/Button";
import { Table, TableHead, TableBody, TableRow } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

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
      {/* <button onClick={onUpdate}>Update</button> */}
      {/* <button onClick={onDelete}>Delete</button> */}
      <Button
        variant="contained"
        size="small"
        color="primary"
        endIcon={<SaveIcon />}
        spacing="2"
        onClick={onUpdate}
      >
        Update
      </Button>
      <Button
        variant="disabled"
        size="small"
        color="secondary"
        endIcon={<DeleteIcon />}
        spacing="2"
        onClick={onDelete}
      >
        Delete
      </Button>
    </>
  );
};
