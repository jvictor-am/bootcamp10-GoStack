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
        // hidden
        barStyle="light-content"
        backgroundColor="#6D2A17"
        // backgroundColor="#7159c1"
        // translucent
      />
      {/* <View style={{ flex: 1, backgroundColor: '#71591c' }}> */}
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
}
