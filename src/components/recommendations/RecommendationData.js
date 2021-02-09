import React from "react";
import firebase from "../../firebase";
import { RecommendationInput } from "./RecommendationInput";

function RecommendationData() {
  // Recommendation state here
  const [recommendations, setRecommendations] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("Recommendation").get();
      setRecommendations(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchData();
  }, []);

  return (
    <div>
      <ol>
        {recommendations.map((recommendation) => (
          <li key={recommendation.id}>
            <RecommendationInput interaction={recommendation} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default RecommendationData;
