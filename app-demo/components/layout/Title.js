import { View, Text, StyleSheet } from 'react-native';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';

export function Title({ title, color }) {
  return (
    <View>
      <Text style={
        [styles.text, { color: color || Colors.black }]}
      >{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.family.bold,
    fontSize: Fonts.size.large,
  }
});
