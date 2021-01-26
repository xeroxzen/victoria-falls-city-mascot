import firebase from "firebase";

const config = {
  apiKey: "AIzaSyChqDrr0pIc0V9qJj2vsxSQEGhy1AbxOEg",
  authDomain: "victoriafallsmascot-imwo.firebaseapp.com",
  projectId: "victoriafallsmascot-imwo",
  storageBucket: "victoriafallsmascot-imwo.appspot.com",
  messagingSenderId: "880901922463",
  appId: "1:880901922463:web:d280cecb45cb293c99ccaa",
  measurementId: "G-STQS2VXKYL",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();
