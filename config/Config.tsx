// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRXaI5s1J1UC6-A3EtJZuvg8NAw9GkM-0",
  authDomain: "prueba-mascotas-69631.firebaseapp.com",
  databaseURL: "https://prueba-mascotas-69631-default-rtdb.firebaseio.com",
  projectId: "prueba-mascotas-69631",
  storageBucket: "prueba-mascotas-69631.firebasestorage.app",
  messagingSenderId: "1058636196189",
  appId: "1:1058636196189:web:f787838191dc22136c20b4",
  measurementId: "G-71DV7F7HSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();