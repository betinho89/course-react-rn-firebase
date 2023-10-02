import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { Content, Header, Wrapper, Title } from "../components/layout";
import Button from "../components/controls/Button";
import FormItem from "../components/controls/FormItem";

import { auth } from "../firebase-config";
import { loginWithEmailPass } from "../services/firebase";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Nos suscribimos al evento que detecta cuando el usuario ya inicio sesión
    const subscriber = onAuthStateChanged(auth, (response) => {
      if (response) {
        navigation.navigate("Dashboard");
      }
    });
    return subscriber;
  }, [auth]);

  const login = async () => {
    if (user && pass) {
      setLoading(true);
      await loginWithEmailPass(user, pass);
      setUser("");
      setPass("");
      setLoading(false);
    }
  };

  const onChangeUser = (value) => {
    setUser(value);
  };

  const onChangePass = (value) => {
    setPass(value);
  };

  return (
    <Wrapper>
      <Header showBack={true} showCart={false} />
      <Content>
        <Title title="Estoy listo para comprar" />
        <FormItem
          value={user}
          label="Nombre de usuario"
          keyboardType="email-address"
          onChange={onChangeUser}
        ></FormItem>
        <FormItem
          value={pass}
          secure={true}
          label="Contraseña"
          onChange={onChangePass}
        ></FormItem>
        <Button label="ACCEDER" onPress={login} isLoading={loading} />
      </Content>
    </Wrapper>
  );
}
