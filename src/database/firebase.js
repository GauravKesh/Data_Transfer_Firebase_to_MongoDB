const { initializeApp }  = require( "firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyA0HJ7OhRTXuuGk_d4yWRfSC2TcczoT7Nc",
  authDomain: "blogsdata-246d6.firebaseapp.com",
  projectId: "blogsdata-246d6",
  storageBucket: "blogsdata-246d6.firebasestorage.app",
  messagingSenderId: "304745682537",
  appId: "1:304745682537:web:343f768e346aa707f634f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if(app){
    console.log("FireBase is Connected");
}

module.exports = app;