import { StyleSheet, Text, View } from 'react-native';

import FormItem from '../components/controls/FormItem';
import Wrapper from '../components/layout/Wrapper';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <Wrapper>
      <Header title="Componentes Base" />
      <View style={styles.container}>
        <Text>Sin etiqueta</Text>
        <FormItem />
        <Text>Con etiqueta</Text>
        <FormItem label={"Correo electrónico"} />
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
});
