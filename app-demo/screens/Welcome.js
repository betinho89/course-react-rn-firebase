import { Content, Wrapper, Title, Logo } from '../components/layout';
import Button from '../components/controls/Button';
import Colors from '../constants/Colors';

export default function Welcome({ navigation }) {
  const goToLogin = () => {
    navigation.navigate('Login');
  }

  const goToRegister = () => {
    navigation.navigate('Register');
  }

  return (
    <Wrapper backgroundColor={Colors.black}>
      <Content>
        <Logo type="white" />
        <Title color={Colors.white} title="Bienvenid@ a APP Demo" />
        <Button onPress={goToLogin} label={"YA TENGO CUENTA"} type="white" />
        <Button onPress={goToRegister} label={"REGISTRARME"} type="white" />
      </Content>
    </Wrapper>
  );
};
