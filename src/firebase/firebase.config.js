// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsJf_WHPmPQPEMYsRsAq82THAurT5ALbw",
  authDomain: "the-news-dragon-8f062.firebaseapp.com",
  projectId: "the-news-dragon-8f062",
  storageBucket: "the-news-dragon-8f062.appspot.com",
  messagingSenderId: "565762417135",
  appId: "1:565762417135:web:a05c91bddafee4793f961a",
  measurementId: "G-GZWLTX6SX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;