// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBjWGWDsycFnp7Z0Ux8es8zqCnmRxzuwF0',
  appId: '1:101638641702:web:869b0b9581bb7a34322ee7',
  authDomain: 'sitam-test.firebaseapp.com',
  measurementId: 'G-KE0XFQEKDP',
  messagingSenderId: '101638641702',
  projectId: 'sitam-test',
  storageBucket: 'sitam-test.appspot.com',
};

// Initialize Firebase
export const app = initializeApp({
  ...firebaseConfig,
});
export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore(app);
