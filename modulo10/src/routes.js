import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <AppStack.Navigator
      // headerMode="none"
      screenOptions={{
        headerShown: false,
        // cardStyle: { backgroundColor: '#71591c' },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // headerTintColor: '#ffd700',
        // headerStyle: { backgroundColor: '#000' },
      }}
    >
      <AppStack.Screen
        name="SignIn"
        component={SignIn}
        // options={{ title: 'Eco Waste managment - Home' }}
      />
      <AppStack.Screen
        name="SignUp"
        component={SignUp}
        // options={{title: 'Eco Waste managment - Home'}}
      />
    </AppStack.Navigator>
  );
}
