// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr6EgxXD8nGOxKFKEoAlgGWdR0dVg9dmI",
  authDomain: "project-netfix.firebaseapp.com",
  projectId: "project-netfix",
  storageBucket: "project-netfix.appspot.com",
  messagingSenderId: "864324054329",
  appId: "1:864324054329:web:ec1264fe00c19d14890ce8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
