import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from './Dashboard';
import External from './External';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName='External'>
      <Stack.Screen name='Dashboard' component={Dashboard} />
      <Stack.Screen name='External' component={External} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
