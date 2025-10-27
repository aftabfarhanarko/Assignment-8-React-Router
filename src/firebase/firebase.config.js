import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDHzQmTPevWsAY47XKdG2ohQZxdvRv83Y",
  authDomain: "app-store-52fd7.firebaseapp.com",
  projectId: "app-store-52fd7",
  storageBucket: "app-store-52fd7.firebasestorage.app",
  messagingSenderId: "576710941559",
  appId: "1:576710941559:web:9bf89e1f206bdee3e45f72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
