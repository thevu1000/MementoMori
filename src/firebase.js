// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "mementomori-vn.firebaseapp.com",
  databaseURL: "https://mementomori-vn-default-rtdb.firebaseio.com",
  projectId: "mementomori-vn",
  storageBucket: "mementomori-vn.appspot.com",
  messagingSenderId: "369747595092",
  appId: "1:369747595092:web:61c7744dc3eae6d70642c1",
  storageBucket: "gs://mementomori-vn.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
