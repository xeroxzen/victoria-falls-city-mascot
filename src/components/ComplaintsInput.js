import React from "react";
import firebase from "../firebase";
import Button from "@material-ui/core/Button";
// import { Table, TableHead, TableBody, TableRow } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

export const ComplaintsInput = ({ data }) => {
  const [date, setDate] = React.useState(data.time);
  const [complaint, setComplaint] = React.useState(data.complaint);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("Complaints")
      .doc(data.id)
      .set({ ...data, date, complaint });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("Complaints").doc(data.id).delete();
  };

  return (
    <>
      <input
        value={complaint}
        onChange={(e) => {
          setComplaint(e.target.value);
        }}
      />
      <input
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />

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
