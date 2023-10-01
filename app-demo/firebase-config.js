// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjWGWDsycFnp7Z0Ux8es8zqCnmRxzuwF0",
  authDomain: "sitam-test.firebaseapp.com",
  projectId: "sitam-test",
  storageBucket: "sitam-test.appspot.com",
  messagingSenderId: "101638641702",
  appId: "1:101638641702:web:869b0b9581bb7a34322ee7",
  measurementId: "G-KE0XFQEKDP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const database = getDatabase(app);
export const db = getFirestore(app);
