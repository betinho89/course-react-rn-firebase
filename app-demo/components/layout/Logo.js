import { View, Image, Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export function Logo({
  type = 'black',
  width,
}) {
  const image = type === 'black' ? require('../../assets/logo.png') : require('../../assets/logo-white.png');
  const size = width || windowWidth * 0.6;
  const height = (550 * size) / 1150;

  return (
    <View style={styles.container}>
      <Image
        style={{
          height,
          width: size,
        }}
        source={image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 25,
  }
});
