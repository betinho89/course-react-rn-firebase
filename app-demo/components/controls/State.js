import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import Fonts from "../../constants/Fonts";
import Colors from "../../constants/Colors";

export default function State({ item, index }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="edit" size={24} color={Colors.black} />
      </TouchableOpacity>
      <View style={styles.leftColumn}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.code}>{item.code}</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.status}>{item.status ? 'Activo' : 'Inactivo'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  leftColumn: {
    padding: 10,
  },
  rightColumn: {
    padding: 10,
  },
  title: {
    fontFamily: Fonts.family.bold,
    fontSize: Fonts.size.normal,
  },
  code: {
    color: Colors.oldSilver,
    fontFamily: Fonts.family.light,
    fontSize: Fonts.size.small,
  },
  status: {
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.normal,
  }
});
