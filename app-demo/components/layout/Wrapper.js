import { View, ScrollView } from "react-native";

export default function Wrapper ({ children }) {
  return (
    <View>
      <ScrollView>
        {children}
      </ScrollView>
    </View>
  );
};
