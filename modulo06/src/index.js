import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="dark-content" backgroundColor="#00FF7F" />
        <Routes />
      </>
    </NavigationContainer>
  );
}
