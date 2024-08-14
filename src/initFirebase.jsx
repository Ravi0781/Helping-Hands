// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhTxRdYEfbbC1dgFlsWHsRcTgd4ap0BH0",
  authDomain: "food-donation-7e411.firebaseapp.com",
  projectId: "food-donation-7e411",
  storageBucket: "food-donation-7e411.appspot.com",
  messagingSenderId: "665751761142",
  appId: "1:665751761142:web:832c946fe29ad8b9357cd7",
  measurementId: "G-TJS47Y0TDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);