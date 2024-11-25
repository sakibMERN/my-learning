// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUemNx81-GwMirJinpc8kWQ2-V8Kji8pE",
  authDomain: "auth-mohamilon-f2f07.firebaseapp.com",
  projectId: "auth-mohamilon-f2f07",
  storageBucket: "auth-mohamilon-f2f07.firebasestorage.app",
  messagingSenderId: "951563801931",
  appId: "1:951563801931:web:f6d86bfa13e26f6e8944ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);