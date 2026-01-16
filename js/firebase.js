// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSy8oShPNedmt7BjLCPjOABQxRx7nJ4vA",
  authDomain: "bus-management-system-8090e.firebaseapp.com",
  projectId: "bus-management-system-8090e",
  storageBucket: "bus-management-system-8090e.firebasestorage.app",
  messagingSenderId: "794623395563",
  appId: "1:794623395563:web:41e9fc3c7ed8f93d79a0ae",
  measurementId: "G-5WF12L9GQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);