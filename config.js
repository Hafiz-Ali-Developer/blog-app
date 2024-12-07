import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRCsYbluMzHQyi2sWq-wbYVzTEr2eyGMQ",
  authDomain: "daynamic-quiz-app.firebaseapp.com",
  projectId: "daynamic-quiz-app",
  storageBucket: "daynamic-quiz-app.firebasestorage.app",
  messagingSenderId: "991394191742",
  appId: "1:991394191742:web:7c61ced4278b929c297b2f",
  measurementId: "G-MHXYXR8Y99"
};


  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);