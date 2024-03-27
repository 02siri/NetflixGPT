// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFPB4_7r5srdu0JZuYXwADpdeL4eO43xk",
  authDomain: "netflixgpt-57e82.firebaseapp.com",
  projectId: "netflixgpt-57e82",
  storageBucket: "netflixgpt-57e82.appspot.com",
  messagingSenderId: "851808826116",
  appId: "1:851808826116:web:4796266484a992c9715651",
  measurementId: "G-8FC1K5LEH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
