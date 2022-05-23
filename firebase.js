import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAj2PY6r_fWJupARr6rKRkiMxkLylBjYM",
  authDomain: "todoapp-84707.firebaseapp.com",
  projectId: "todoapp-84707",
  storageBucket: "todoapp-84707.appspot.com",
  messagingSenderId: "895225147774",
  appId: "1:895225147774:web:b57cf21e6abd594ac8432f",
  measurementId: "G-8B0C01D6VX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
