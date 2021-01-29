import React from "react";
import firebase from "../firebase";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

export const RecommendationInput = ({ data }) => {
  const [date, setDate] = React.useState(data.date);
  const [recommendation, setRecommendation] = React.useState(data.symptoms);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("Recommendation")
      .doc(date.id)
      .set({ ...data, date, recommendation });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("Recommendation").doc(data.id).delete();
  };

  return (
    <>
      <input
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
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
