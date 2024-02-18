// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';



// TODO: Add a section below to import any additional Firebase services that you want to use in your project.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCAEmUWbjszWdVFntXNzDmSN3KpcmxM4Ns",

  authDomain: "react-blog-rafce.firebaseapp.com",

  projectId: "react-blog-rafce",

  storageBucket: "react-blog-rafce.appspot.com",

  messagingSenderId: "84280304536",

  appId: "1:84280304536:web:c7f1d98db2f1cf30ab01ed",

  measurementId: "G-E9C1EYT1E9"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);
const storage=getStorage(app);

export {db, auth, storage}
