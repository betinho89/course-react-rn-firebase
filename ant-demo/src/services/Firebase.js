import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { message } from "antd";
import { doc, getDoc, setDoc } from "firebase/firestore";

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
    return context;
  } catch (error) {
    return error;
  }
};

export const loginWithEmailPass = async (email, password) => {
  try {
    const context = await signInWithEmailAndPassword(auth, email, password);
    if (context?.user?.uid) {
      const docSnap = await getDoc(doc(db, 'users', context.user.uid));
      if (docSnap.exists()) {
        const userExtData = docSnap.data();
        context.user = {
          ...context.user,
          ...userExtData
        };
      }
    }
    return context;
  } catch (error) {
    console.log(error?.message);
    return error;
  }
};
