
import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyAfRCu5kWrli6SuZdvc9BZdMaz6wu6Nn2k",
    authDomain: "digital-startup-22f90.firebaseapp.com",
    databaseURL: "https://digital-startup-22f90.firebaseio.com",
    projectId: "digital-startup-22f90",
    storageBucket: "digital-startup-22f90.appspot.com",
    messagingSenderId: "274764113377",
    appId: "1:274764113377:web:8a6cd63a13a4637e939ea0"
  })
  .firestore();

export const bookRef = db.collection("books");
export const myBookRef = db.collection("myBooks");
