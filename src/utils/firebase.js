// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqpxLfHR8IOtNxCKKYtbr_GzPVi_fn6tQ",
  authDomain: "netflixgpt-007.firebaseapp.com",
  projectId: "netflixgpt-007",
  storageBucket: "netflixgpt-007.appspot.com",
  messagingSenderId: "670193484550",
  appId: "1:670193484550:web:01b9e956639ef0b0ab9487",
  measurementId: "G-ME09VM2T5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);