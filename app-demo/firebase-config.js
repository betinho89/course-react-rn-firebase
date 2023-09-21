// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_yQfuVxSDjtHrAnD3VNhHKA5kZBtjFjg",
  authDomain: "app-demo-utep-bs.firebaseapp.com",
  projectId: "app-demo-utep-bs",
  storageBucket: "app-demo-utep-bs.appspot.com",
  messagingSenderId: "659068553409",
  appId: "1:659068553409:web:dead2cb644249634fa2c40",
  measurementId: "G-GFTYPY4S96",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const database = getDatabase(app);
