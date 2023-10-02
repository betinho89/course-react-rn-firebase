import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../../constants/Colors'

export function Wrapper ({ children, backgroundColor }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={[
        styles.container,
        { backgroundColor }
      ]}>
        <ScrollView>
          {children}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.ghostWhite,
    flex: 1,
  },
  safe: {
    flex: 1,
  }
});
