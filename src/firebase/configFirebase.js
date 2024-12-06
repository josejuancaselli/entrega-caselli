// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY_FIREBASE,
    authDomain: import.meta.env.VITE_AUTHDOMAIN_FIREBASE,
    projectId: import.meta.env.VITE_PROJECTID_FIREBASE,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET_FIREBASE,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID_FIREBASE,
    appId: import.meta.env.VITE_APPID_FIREBASE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

