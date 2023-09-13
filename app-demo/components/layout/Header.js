import { View, Image, TouchableOpacity } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

export default function Header({ children }) {
  return (
    <View>
      <TouchableOpacity>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <View>
        {children && {children}}
        <Image source={require('../../assets/icon.png')} />
      </View>
      <TouchableOpacity>
        <EvilIcons name="cart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
