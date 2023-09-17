import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth
} from "firebase/auth";
import { message } from "antd";
import { doc, setDoc } from "firebase/firestore";

import { auth, db } from "../firebase-config";

export const logoutAuth = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    message.error("Error" + JSON.stringify(error));
  }
};

export const registerEmailPass = async (user) => {
  try {
    const context = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password
    );
    const userRef = doc(db, "users", context.user.uid);
    await setDoc(userRef, {
      email: user.email,
      full_name: user.full_name,
    });
    return context;
  } catch (error) {
    console.log(error);
    message.error("Error" + JSON.stringify(error));
  }
};

export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const context = await signInWithPopup(auth, provider);
    console.log('Context: ', context);
    return context;
  } catch (error) {
    console.log(error?.message);
    message.error("Error" + JSON.stringify(error));
  }
};

export const loginWithEmailPass = async (email, password) => {
  try {
    const context = await signInWithEmailAndPassword(auth, email, password);
    return context;
  } catch (error) {
    message.error("Error" + JSON.stringify(error));
  }
};
