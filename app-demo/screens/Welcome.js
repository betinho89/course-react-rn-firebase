import { Text, ImageBackground, Image } from 'react-native';

import { Content, Wrapper } from '../components/layout';
import Button from '../components/controls/Button';

export default function Welcome({ navigation }) {
  const goToLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <Wrapper>
      <Content>
        <ImageBackground
          source={require('../assets/header-background.png')}
        >
          <Image source={require('../assets/logo-white.png')} />
        </ImageBackground>
        <Text>Bienvenid@ a 4U</Text>
        <Button onPress={goToLogin} label={"YA TENGO CUENTA"} />
      </Content>
    </Wrapper>
  );
};
