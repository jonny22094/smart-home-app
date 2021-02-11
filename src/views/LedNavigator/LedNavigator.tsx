import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ColorPicker from '../LedScreens/ColorPicker';
import ColorPalette from '../LedScreens/ColorPalette';
import ColorSequence from '../LedScreens/ColorSequence';

const Tab = createBottomTabNavigator();

const LedNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="ColorSequence"
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#2b2f50',
        },
        activeBackgroundColor: '#191e40',
      }}
    >
      <Tab.Screen
        name="ColorPicker"
        component={ColorPicker}
        options={{
          tabBarIcon: () => <Ionicons name="ios-color-filter" color="rgba(255, 255, 255, 0.6)" size={32} />,
        }}
      />
      <Tab.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={{
          tabBarIcon: () => <Ionicons name="ios-color-palette" color="rgba(255, 255, 255, 0.6)" size={32} />,
        }}
      />
      <Tab.Screen
        name="ColorSequence"
        component={ColorSequence}
        options={{
          tabBarIcon: () => <Ionicons name="ios-timer" color="rgba(255, 255, 255, 0.6)" size={32} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default LedNavigator;
