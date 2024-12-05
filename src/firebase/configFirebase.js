// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1pWTuGnjm8dksLV3i4-faOIycqCv7ocM",
    authDomain: "sobrelasilla-5d229.firebaseapp.com",
    projectId: "sobrelasilla-5d229",
    storageBucket: "sobrelasilla-5d229.firebasestorage.app",
    messagingSenderId: "80205755005",
    appId: "1:80205755005:web:b064864f45eba3aaa7b714"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);