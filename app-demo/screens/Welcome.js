import { ImageBackground, StyleSheet } from 'react-native';

import { Content, Wrapper, Title, Logo } from '../components/layout';
import Button from '../components/controls/Button';
import Colors from '../constants/Colors';

export default function Welcome({ navigation }) {
  const goToLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <Wrapper backgroundColor={Colors.black}>
      <Content>
        <ImageBackground
          style={styles.background}
          source={require('../assets/header-background.png')}
        >
          <Logo type="white" />
        </ImageBackground>
        <Title color={Colors.white} title="Bienvenid@ a 4U" />
        <Button onPress={goToLogin} label={"YA TENGO CUENTA"} type="white" />
      </Content>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  background: {
    marginBottom: 20,
    marginTop: 50,
    width: '100%',
  }
})
