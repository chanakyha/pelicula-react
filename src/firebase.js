import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyAcq-z00qx5PaT3peSeDmMErHC_j1PEEz0",
  authDomain: "pelicula-22a46.firebaseapp.com",
  projectId: "pelicula-22a46",
  storageBucket: "pelicula-22a46.appspot.com",
  messagingSenderId: "771328526357",
  appId: "1:771328526357:web:9636160551afe98e4da61c",
});

const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, onAuthStateChanged, provider, signInWithPopup, signOut };
