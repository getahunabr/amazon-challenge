import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA7K8slHFRYQgmXbFZoEc0fRGyaySZhUZw",
  authDomain: "challenge-51483.firebaseapp.com",
  projectId: "challenge-51483",
  storageBucket: "challenge-51483.appspot.com",
  messagingSenderId: "769974367424",
  appId: "1:769974367424:web:2396c6f812bd665c1ce925",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
