import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="arrow-back-outline" size={40} color="black" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        <Image style={styles.logo} source={require('../../assets/icon.png')} />
      </View>
      <TouchableOpacity>
        <EvilIcons name="cart" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: 'center'
  },
  title: {
    backgroundColor: Colors.white,
    borderColor: Colors.platinum,
    borderRadius: 20,
    borderWidth: 1,
    color: Colors.jet,
    fontFamily: Fonts.family.bold,
    fontSize: Fonts.size.normal,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
});
