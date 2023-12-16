// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq_NohRv9dgC6pBixDZylvuXwJC3AvEJk",
  authDomain: "netflix-gpt-b1bcf.firebaseapp.com",
  projectId: "netflix-gpt-b1bcf",
  storageBucket: "netflix-gpt-b1bcf.appspot.com",
  messagingSenderId: "254057672961",
  appId: "1:254057672961:web:47edab89348362892eeb00",
  measurementId: "G-T29TX2141V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();