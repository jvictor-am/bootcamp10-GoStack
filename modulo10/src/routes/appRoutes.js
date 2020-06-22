import React from 'react';
// import {
//   // createStackNavigator,
//   CardStyleInterpolators,
// } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const AppTab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppTab.Navigator
      // screenOptions={{
      //   // headerShown: false,
      //   // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      // }}
      initialRouteName="Dashboard"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: '#ff8907',
          borderTopWidth: 0,
          height: 60,
          paddingTop: 10,
          paddingBottom: 10,
        },
      }}
    >
      <AppTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Icon name="event" color={color} size={24} />
          ),
        }}
      />
      <AppTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={24} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}
