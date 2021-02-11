import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/views/Home';
import LedNavigator from './src/views/LedNavigator';
import { useSocket } from './src/utils/socket';

const Drawer = createDrawerNavigator();

export default function App() {
  const sockets = useSocket();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ColorPicker">
        <Drawer.Screen name="Home">{() => <Home sockets={sockets} />}</Drawer.Screen>
        <Drawer.Screen name="ColorPicker" component={LedNavigator} options={{ drawerLabel: 'Led strip' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
