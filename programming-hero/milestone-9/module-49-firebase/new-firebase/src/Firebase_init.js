// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB36RgwPqbqNFcA37WnUvVPKGoXcRVRKAU",
  authDomain: "new-firebase-e31a4.firebaseapp.com",
  projectId: "new-firebase-e31a4",
  storageBucket: "new-firebase-e31a4.firebasestorage.app",
  messagingSenderId: "1083920209156",
  appId: "1:1083920209156:web:a7546b715e06cef0de6c51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;