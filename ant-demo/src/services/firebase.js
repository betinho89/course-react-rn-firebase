import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

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

export const loginWithEmailPass = async (email, password) => {
  try {
    // Iniciamos sesión con el servicio de authentication de firebase
    const context = await signInWithEmailAndPassword(auth, email, password);
    if (context?.user?.uid) {
      // Obtenemos la información extra del usuario desde la colección de users
      const docUser = await getDoc(doc(db, 'users', context.user.uid));
      if (docUser.exists()) {
        const extraInfo = docUser.data();
        // Destructuramos extraInfo para adjuntar los demás campos al contexto de user
        context.user = {
          ...context.user,
          ...extraInfo,
        };
      }
    }
    return context;
  } catch (error) {
    return error;
  }
};
