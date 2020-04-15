import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

// const Routes = NavigationContainer(createStackNavigator({ Main, User }));

// export default Routes;

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    // <NavigationContainer>
    <AppStack.Navigator
      headerBackTitleVisible={false}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#00FF7F' },
        headerTintColor: '#000',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <AppStack.Screen
        name="Main"
        component={Main}
        options={{ title: 'Usuários' }}
      />
      <AppStack.Screen
        name="User"
        component={User}
        options={({ route }) => ({ title: route.params.user.name })}
      />
    </AppStack.Navigator>
    // </NavigationContainer>
  );
}
