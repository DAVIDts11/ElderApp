import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import firebase from "firebase";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Screens/LoginScreen";
import SignUp from "./Screens/SignUpScreen";
import Homepage from "./Screens/HomePageScreen";
import MainScreen from "./Screens/MainScreen";



export default function App() {
  const [DB, setDB] = useState();

  useEffect(() => {
    let firebaseConfig = {
      apiKey: "AIzaSyA48cbMgESZYhAcx3qwoYRspHr1m3Quu00",
      authDomain: "elderapp-54404.firebaseapp.com",
      projectId: "elderapp-54404",
      storageBucket: "elderapp-54404.appspot.com",
      messagingSenderId: "839232656580",
      appId: "1:839232656580:web:a69e3cb73d0536040f6591",
    };
    firebase.initializeApp(firebaseConfig);
    let database = firebase.database();
    setDB(database);
  }, []);

  const Stack = createStackNavigator();
    return (

      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="Login" component={Login} DB={DB}/>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Homepage" component={Homepage} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>

    );
  };

const styles = StyleSheet.create({
  SignUp: {},
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
