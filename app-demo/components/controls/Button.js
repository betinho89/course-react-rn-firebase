import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function Button({ label, type = 'black', onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[
      styles.container,
      type === 'white' && styles.containerWhite
    ]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.black,
    borderRadius: 25,
    paddingVertical: 10,
    marginBottom: 20,
    width: '100%',
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.normal,
  },
  containerWhite: {
    borderColor: Colors.white,
    borderRadius: 25,
    borderWidth: 2,
  },
});
