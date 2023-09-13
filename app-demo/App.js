import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import Fonts from './constants/Fonts';
import FormItem from './components/controls/FormItem';
import Wrapper from './components/layout/Wrapper';
import Header from './components/layout/Header';

export default function App() {
  const [fontLoaded, fontError] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold
  });

  if (!fontLoaded && !fontError) {
    return null;
  }

  return (
    <Wrapper>
      <Header title="Componentes Base" />
      <View style={styles.container}>
        <Text>Sin etiqueta</Text>
        <FormItem />
        <Text>Con etiqueta</Text>
        <FormItem label={"Correo electrónico"} />
        <StatusBar style="auto" />
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
});
