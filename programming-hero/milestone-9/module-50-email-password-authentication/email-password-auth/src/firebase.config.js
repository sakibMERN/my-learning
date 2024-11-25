// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf9Bxn9_ybQhME7w46YsyOQZfAkT5t-Ks",
  authDomain: "email-password-auth-ba275.firebaseapp.com",
  projectId: "email-password-auth-ba275",
  storageBucket: "email-password-auth-ba275.firebasestorage.app",
  messagingSenderId: "608515564606",
  appId: "1:608515564606:web:39f1fc8502d891579f1d6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
