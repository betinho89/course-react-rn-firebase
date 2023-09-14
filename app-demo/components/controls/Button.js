import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
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
    width: '100%',
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.normal,
  }
});
