import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { store } from "./Store/store";
import Login from "./components/Login";
import MainPage from "./components/mainPage"

export default function App() {

 
  return (
    <View style={styles.container}>
      <Provider store={store} >     
        <Login style={styles.login} > </Login>
        <MainPage></MainPage>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {

  },
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0  },
});



// <View style={styles.container}>
// <Text>Hello David !!!</Text>
// <Login> </Login>
// </View>