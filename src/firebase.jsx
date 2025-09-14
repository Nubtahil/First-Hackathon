// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getAuth} from  'firebase/auth';
 import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyD7W-0pSzS1FPUmofdcHM6Oki-7QnZeCkg",
  authDomain: "newtodoapp-76402.firebaseapp.com",
  projectId: "newtodoapp-76402",
  storageBucket: "newtodoapp-76402.firebasestorage.app",
  messagingSenderId: "650507215956",
  appId: "1:650507215956:web:4686b270ce330c5d10b9c1",
  measurementId: "G-QHVQ2V2MRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = new getFirestore(app)