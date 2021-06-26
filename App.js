import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store/store';

import { NavigationContainer } from '@react-navigation/native';
import RootStackScreen from './Screens/RootStackScreen';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
}
