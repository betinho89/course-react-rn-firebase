import { View, ScrollView } from "react-native";

export function Wrapper ({ children }) {
  return (
    <View>
      <ScrollView>
        {children}
      </ScrollView>
    </View>
  );
};
