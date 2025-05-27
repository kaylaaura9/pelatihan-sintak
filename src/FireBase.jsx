// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUyaZG4nS_SJsnGe8bCWwHzqhcBfjiTX8",
  authDomain: "pelatihan-sintak-1b186.firebaseapp.com",
  projectId: "pelatihan-sintak-1b186",
  storageBucket: "pelatihan-sintak-1b186.firebasestorage.app",
  messagingSenderId: "449415665923",
  appId: "1:449415665923:web:97956acdc3253a78553136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
