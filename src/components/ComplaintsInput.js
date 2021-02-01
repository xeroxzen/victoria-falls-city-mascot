import React from "react";
import firebase from "../firebase";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

export const ComplaintsInput = ({ interaction }) => {
  const [date, setDate] = React.useState(interaction.date);
  const [complaint, setComplaint] = React.useState(interaction.complaint);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("Complaints")
      .doc(interaction.id)
      .set({ ...interaction, date, complaint });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("Complaints").doc(interaction.id).delete();
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

      {/* <Button
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
      </Button> */}
    </>
  );
};
