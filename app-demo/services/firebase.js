import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Alert } from 'react-native';

import { auth, db } from '../firebase-config';

/**
 * Función para cerrar sesión
 */
export const logoutAuth = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    Alert.alert('Error', JSON.stringify(error));
  }
};

/**
 * Permite registrar un usuario nuevo
 *
 * @param {object} user - Objeto que representa el registro de un usuario nuevo
 * @returns boolean
 */
export const registerEmailPass = async (user) => {
  try {
    // Usamos la función propia de Firebase para registrar un usuario
    const context = await createUserWithEmailAndPassword(
      auth,
      user.email,
      user.password,
    );
    // Creamos un documento que haga referencia a un documento de users
    const userRef = doc(db, 'users', context.user.uid);
    // Guardamos la información en un documento de Firestore
    await setDoc(userRef, {
      email: user.email,
      full_name: user.full_name,
    });
    return true;
  } catch (error) {
    console.log(error);
    Alert.alert('Error', JSON.stringify(error));
    return false;
  }
};

/**
 * Permite iniciar sesión
 *
 * @param {string} email - Correo electrónico
 * @param {string} password - Contraseña
 */
export const loginWithEmailPass = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    Alert.alert('Error', JSON.stringify(error));
  }
};
