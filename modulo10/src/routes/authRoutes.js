import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

// import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// import Dashboard from './pages/Dashboard';

const Auth = createStackNavigator();

// export default function Routes() {
export default function AuthRoutes() {
  return (
    <Auth.Navigator
      // headerMode="none"
      screenOptions={{
        headerShown: false,
        // cardStyle: { backgroundColor: '#71591c' },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // headerTintColor: '#ffd700',
        // headerStyle: { backgroundColor: '#000' },
      }}
    >
      <Auth.Screen
        name="SignIn"
        component={SignIn}
        // options={{ title: 'Eco Waste managment - Home' }}
      />
      <Auth.Screen
        name="SignUp"
        component={SignUp}
        // options={{title: 'Eco Waste managment - Home'}}
      />
    </Auth.Navigator>
  );
}
