import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

// import { Container } from './styles';

// const src = () => {
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#71591c"
        // translucent
      />
      <View style={{ flex: 1, backgroundColor: '#71591c' }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}
