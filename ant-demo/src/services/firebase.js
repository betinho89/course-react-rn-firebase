import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { auth, db } from '../firebase-config';

export const registerUser = async (user) => {
  try {
    // Registra primero el usuario en el servicio de Authentication
    const context = await createUserWithEmailAndPassword(auth, user.email, user.password);
    // Enseguida registramos la información extra en la colección de users
    const userRef = doc(db, "users", context.user.uid);
    await setDoc(userRef, {
      email: user.email,
      full_name: user.full_name,
    });
    return context;
  } catch(error) {
    console.error('Error al registrar usuario. ', error);
    return error;
  }
};
