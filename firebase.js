// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcSZB1sL9hX3co6QeKHKYWzLMUV9sj610",
  authDomain: "instagram-v2-23eaf.firebaseapp.com",
  projectId: "instagram-v2-23eaf",
  storageBucket: "instagram-v2-23eaf.appspot.com",
  messagingSenderId: "245435502388",
  appId: "1:245435502388:web:cba7f44fd2ce239c555f61",
  measurementId: "G-HWQR3MFN8C",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
