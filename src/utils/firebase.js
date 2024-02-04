// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4wgzbhbOTLsp5hqVcVQsouGtKbcrZWvg",
  authDomain: "netflixgpt-3331b.firebaseapp.com",
  projectId: "netflixgpt-3331b",
  storageBucket: "netflixgpt-3331b.appspot.com",
  messagingSenderId: "188950899236",
  appId: "1:188950899236:web:6b0c1c386a4a057ccc86b1",
  measurementId: "G-7DDG0PK0D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);