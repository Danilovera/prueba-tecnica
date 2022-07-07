// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP1wd4smyGsWkfMUpbN3QeKxjUYjFOWog",
  authDomain: "prueba-tecnica-1f254.firebaseapp.com",
  projectId: "prueba-tecnica-1f254",
  storageBucket: "prueba-tecnica-1f254.appspot.com",
  messagingSenderId: "342350396069",
  appId: "1:342350396069:web:3ddb069b5d0ec0e0a1eb4c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider()
export const db = getFirestore()
