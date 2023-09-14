import { Text, Button, View } from "react-native";

export default function Login({ navigation }) {
  const goToHome = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View>
      <Text>Pantalla de Inicio de sesión</Text>
      <Button title="Ir al Home" onPress={goToHome} />
    </View>
  )
};
