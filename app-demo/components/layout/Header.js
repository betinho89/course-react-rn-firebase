import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../constants/Colors';
import Fonts from '../../constants/Fonts';

export function Header({
  title,
  showBack = false,
  showCart = true,
}) {
  const navigation = useNavigation();

  const goToBack = () => {
    navigation.goBack();
  };

  const showDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      {showBack ? (
        <TouchableOpacity onPress={goToBack}>
          <Ionicons name="arrow-back-outline" size={40} color="black" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={showDrawer}>
          <Ionicons name="menu" size={40} color="black" />
        </TouchableOpacity>
      )}
      <View style={styles.logoContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      {showCart ? (
        <TouchableOpacity>
          <EvilIcons name="cart" size={40} color="black" />
        </TouchableOpacity>
      ) : (<View></View>)}
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
