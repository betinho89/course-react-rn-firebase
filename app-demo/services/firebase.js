import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

import { auth, db } from '../firebase-config';

export const logoutAuth = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    Alert.alert('Error', JSON.stringify(error));
  }
};

export const registerEmailPass = async (user) => {
  try {
    const context = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    const userRef = doc(db, 'users', context.user.uid);
    await setDoc(userRef, {
      email: user.email,
      full_name: user.full_name,
    });
  } catch (error) {
    console.log(error);
    Alert.alert('Error', JSON.stringify(error));
  }
};

export const loginWithEmailPass = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    Alert.alert('Error', JSON.stringify(error));
  }
};
