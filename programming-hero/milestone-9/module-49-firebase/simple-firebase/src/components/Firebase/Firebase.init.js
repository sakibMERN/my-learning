// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO049huTjUvsECvqeJI1EZHt_aYVLhCS8",
  authDomain: "simple-firebase2-c6a4c.firebaseapp.com",
  projectId: "simple-firebase2-c6a4c",
  storageBucket: "simple-firebase2-c6a4c.firebasestorage.app",
  messagingSenderId: "815877402494",
  appId: "1:815877402494:web:49b151cb535fa7f5228d2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;