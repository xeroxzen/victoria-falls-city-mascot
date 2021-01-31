import React from "react";
import firebase from "../firebase";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

export const InteractionsInput = ({ interaction }) => {
  const [phone, setPhone] = React.useState(interaction.phone);
  const [symptom, setSymptom] = React.useState(interaction.symptoms);
  const [time, setTime] = React.useState(interaction.time);
  const [age, setAge] = React.useState(interaction.ageRange);
  const [gender, setGender] = React.useState(interaction.gender);
  const [complaint, setComplaint] = React.useState(interaction.complaint);
  const [recommendation, setRecommendation] = React.useState(
    interaction.recommendation
  );

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("interactions")
      .doc(interaction.id)
      .set({ ...interaction, phone, symptom, time, age, gender });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("interactions").doc(interaction.id).delete();
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
        value={symptom}
        onChange={(e) => {
          setSymptom(e.target.value);
        }}
      />
      <input
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />
      <input
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        value={complaint}
        onChange={(e) => {
          setComplaint(e.target.value);
        }}
      />
      <input
        value={recommendation}
        onChange={(e) => {
          setRecommendation(e.target.value);
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
