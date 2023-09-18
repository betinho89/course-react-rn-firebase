import { View, ScrollView, StyleSheet } from "react-native";
import Colors from '../../constants/Colors'

export function Wrapper ({ children, backgroundColor }) {
  return (
    <View style={[
      styles.container,
      { backgroundColor }
    ]}>
      <ScrollView>
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.ghostWhite,
    flex: 1,
  }
});
