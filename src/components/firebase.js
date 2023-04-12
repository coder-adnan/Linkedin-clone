import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaMLkBYeq4IYKES9DpCsUGyb-xf4LQ5D0",
  authDomain: "linkedin-clone-f8b7f.firebaseapp.com",
  projectId: "linkedin-clone-f8b7f",
  storageBucket: "linkedin-clone-f8b7f.appspot.com",
  messagingSenderId: "537935565054",
  appId: "1:537935565054:web:d5ea18bd731466662095af",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
