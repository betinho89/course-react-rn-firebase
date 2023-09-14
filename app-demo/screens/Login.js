import { Content, Header, Wrapper } from '../components/layout';
import Button from '../components/controls/Button';

export default function Login({ navigation }) {
  const goToHome = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <Wrapper>
      <Header showBack={true} />
      <Content>
        <Button label="Ir al Home" onPress={goToHome} />
      </Content>
    </Wrapper>
  );
};
