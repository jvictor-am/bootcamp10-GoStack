import 'react-native-gesture-handler';

import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import './config/ReactotronConfig';

import { store, persistor } from './store';
// import App from './App';
import Routes from './routes';

// import { Container } from './styles';

export default function Index() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
