import firebase from "firebase/app";
import "firebase/firestore";

// Firebase configeration
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyCgZYkqYFarxyRnQ_EioY6iFqu7_phr0Og",
    authDomain: "digital-startup-54ad9.firebaseapp.com",
    databaseURL: "https://digital-startup-54ad9.firebaseio.com",
    projectId: "digital-startup-54ad9",
    storageBucket: "digital-startup-54ad9.appspot.com",
    messagingSenderId: "463293852739",
    appId: "1:463293852739:web:d62e82b3f0164edf28b8f6"
  })
  .firestore();

export const postRef = db.collection("items");
