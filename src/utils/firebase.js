// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQLAo0ugWxN6g3PH6crwSYVHwswX5fHws",
  authDomain: "portfolio-313015.firebaseapp.com",
  projectId: "portfolio-313015",
  storageBucket: "portfolio-313015.appspot.com",
  messagingSenderId: "556822458936",
  appId: "1:556822458936:web:c3f0076567b620dacdeccd",
  measurementId: "G-SQPRMF0D01"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;