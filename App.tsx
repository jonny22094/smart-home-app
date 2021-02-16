import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/views/Home';
import Token from './src/views/Token';
import Loading from './src/views/Loading';
import LedNavigator from './src/views/LedNavigator';
import { useSockets } from './src/utils/socket';
import { useAuth, AuthStatus } from './src/utils/useAuth';

const Drawer = createDrawerNavigator();

const Router = () => {
  const { authStatus } = useAuth();
  const { isLoading } = useSockets();

  const shouldRender = !isLoading && authStatus !== AuthStatus.Loading;

  return shouldRender ? (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={authStatus === AuthStatus.Authorized ? 'Home' : 'Settings'}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="ColorPicker" component={LedNavigator} options={{ drawerLabel: 'Led strip' }} />
        <Drawer.Screen name="Settings" component={Token} options={{ drawerLabel: 'Settings' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  ) : (
    <Loading />
  );
};

export default Router;
