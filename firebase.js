// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// ⬇️ Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyC2z5PZ463UD9UVlSpFcir3rVYCjGX1gQ0",
  authDomain: "dataenggcohort.firebaseapp.com",
  projectId: "dataenggcohort",
  storageBucket: "dataenggcohort.firebasestorage.app",
  messagingSenderId: "144909028279",
  appId: "1:144909028279:web:a5d404df4fd52e2b93b632",
  measurementId: "G-LDY501Z6D8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, doc, getDoc, setDoc };
