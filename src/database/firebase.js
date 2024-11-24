// config/firebase.js
const { initializeApp }= require("firebase/app");
const { getFirestore } = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCrRayYBS1Hpeq-UlqOqtqhybOgrTKc12A",
    authDomain: "plentra.firebaseapp.com",
    projectId: "plentra",
    storageBucket: "plentra.firebasestorage.app",
    messagingSenderId: "473835982873",
    appId: "1:473835982873:web:023159749adefdaca91a88",
    measurementId: "G-R2H8P4M2YJ"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db ;
