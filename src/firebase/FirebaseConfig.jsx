// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhO5WfPyoiOjKU7-frmqSec1EkKK0zeNM",
  authDomain: "myecom-7d35c.firebaseapp.com",
  projectId: "myecom-7d35c",
  storageBucket: "myecom-7d35c.appspot.com",
  messagingSenderId: "333588616596",
  appId: "1:333588616596:web:215dcc8ad2a4496349eb81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };