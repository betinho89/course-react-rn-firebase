import { View, Text, TextInput, StyleSheet } from "react-native";

import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export default function FormItem ({ label, onChange }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput onChangeText={onChange} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    width: '100%'
  },
  label: {
    color: Colors.oldSilver,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.family.regular,
    textAlign: 'left'
  },
  input: {
    borderBottomColor: Colors.cinnabar,
    borderBottomWidth: 2,
    color: Colors.jet,
    fontSize: Fonts.size.normal,
    paddingBottom: 5,
    paddingTop: 5,
  }
});
