import { Text, View, StyleSheet } from "react-native";

import FormItem from '../components/controls/FormItem';
import { Content, Header, Wrapper } from '../components/layout';

export default function Profile() {
  return (
    <Wrapper>
      <Header title="Perfil" showBack={true} />
      <Content>
        <FormItem label={"Correo electrónico"} />
        <FormItem label={"Nombre completo"} />
        <FormItem label={"Telefóno"} />
      </Content>
    </Wrapper>
  )
};
