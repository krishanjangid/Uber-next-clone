// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgdIYAl3qXjYsb6Oj7Sz8EitfQY0jd0Bc",
  authDomain: "uber-next-clone-krish.firebaseapp.com",
  projectId: "uber-next-clone-krish",
  storageBucket: "uber-next-clone-krish.appspot.com",
  messagingSenderId: "1034969149419",
  appId: "1:1034969149419:web:931987ff877308723ff3ae",
  measurementId: "G-HBB2T3R7N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app,provider,auth}