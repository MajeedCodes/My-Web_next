
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBp7CnlTQr_faxlRCMlofWRukhw91wd3Xs",
  authDomain: "project-7054f.firebaseapp.com",
  projectId: "project-7054f",
  storageBucket: "project-7054f.firebasestorage.app",
  messagingSenderId: "992868978506",
  appId: "1:992868978506:web:e6d92c4a90d7ff7fbafbb3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);