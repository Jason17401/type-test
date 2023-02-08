// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIkA0uqCCIGrUzc4I4_lTwGrQgv8lqddo",
  authDomain: "typing-test-86ec0.firebaseapp.com",
  projectId: "typing-test-86ec0",
  storageBucket: "typing-test-86ec0.appspot.com",
  messagingSenderId: "396721396516",
  appId: "1:396721396516:web:33397f93350f5d3a1ab1b1",
  measurementId: "G-9ZM7099S65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);