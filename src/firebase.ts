import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDrQoFLHS8TMiUnxDdUQWGofa6Eq-b8w4",
  authDomain: "nextjs-hp.firebaseapp.com",
  projectId: "nextjs-hp",
  storageBucket: "nextjs-hp.firebasestorage.app",
  messagingSenderId: "818298834937",
  appId: "1:818298834937:web:f98e50a48cf0d6c4663728",
  measurementId: "G-XN350D7KE5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = app.name && typeof window !== "undefined" ? getAnalytics(app) : null;
const db = getFirestore(app);
export { app, analytics, auth, db };
