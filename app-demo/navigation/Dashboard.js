import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from '../screens/Home';
import Profile from '../screens/Profile';

export default function Dashboard() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Profile' component={Profile} />
    </Drawer.Navigator>
  );
}
