// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCVXXBKfmlaDRsU562For4MbXczNCD6ydo",
    authDomain: "resumebuilder-ad81a.firebaseapp.com",
    projectId: "resumebuilder-ad81a",
    storageBucket: "resumebuilder-ad81a.appspot.com",
    messagingSenderId: "506686247067",
    appId: "1:506686247067:web:b6d8051650a95d5639b63e",
    measurementId: "G-PHCJ1FMB6Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();