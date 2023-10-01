import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { Content, Header, Wrapper, Title } from '../components/layout';
import Button from '../components/controls/Button';
import FormItem from '../components/controls/FormItem';

import { auth } from '../firebase-config';
import { loginWithEmailPass } from '../services/firebase';

export default function Login({ navigation }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    // Nos suscribimos al evento que detecta cuando el usuario ya inicio sesión
    const subscriber = onAuthStateChanged(auth, response => {
      if (response) {
        navigation.navigate('Dashboard');
      }
    });
    return subscriber;
  }, [auth])

  const login = async () => {
    if (user && pass) {
      await loginWithEmailPass(user, pass);
    }
  };

  const onChangeUser = (value) => {
    setUser(value);
  };

  const onChangePass = (value) => {
    setPass(value);
  }

  return (
    <Wrapper>
      <Header showBack={true} showCart={false} />
      <Content>
        <Title title="Estoy listo para comprar" />
        <FormItem label="Nombre de usuario" onChange={onChangeUser}></FormItem>
        <FormItem label="Contraseña" onChange={onChangePass}></FormItem>
        <Button label="ACCEDER" onPress={login} />
      </Content>
    </Wrapper>
  );
};
