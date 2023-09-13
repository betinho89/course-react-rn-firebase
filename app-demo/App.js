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
    <View style={styles.container}>
      <Text style={{
        fontFamily: Fonts.family.bold,
        fontSize: Fonts.size.large
      }}>Componentes Base</Text>
      <Text>Sin etiqueta</Text>
      <FormItem />
      <Text>Con etiqueta</Text>
      <FormItem label={"Correo electrónico"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
