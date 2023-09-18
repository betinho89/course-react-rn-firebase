import { View, Image, Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function Logo({
  type = 'black',
  height,
  width,
}) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height,
          maxWidth: windowWidth * 0.8,
          width,
        }}
        source={
          require(
            `../../assets/${type === 'black' ? 'icon.png' : 'logo-white.png'}`
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  }
});
