// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqKG1_lELp7SAWdu8Y2sBQPDnKwJD8R34",
  authDomain: "curadu-5e662.firebaseapp.com",
  projectId: "curadu-5e662",
  storageBucket: "curadu-5e662.firebasestorage.app",
  messagingSenderId: "582591584915",
  appId: "1:582591584915:web:cdacd77ead5b6f683e0b66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

