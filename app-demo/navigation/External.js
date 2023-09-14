import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screens/Login';

export default function External() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}
