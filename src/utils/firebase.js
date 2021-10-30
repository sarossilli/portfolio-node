import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

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

initializeApp(firebaseConfig);
const db= getFirestore();

export default db;