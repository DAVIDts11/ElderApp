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
import HomepageVolunteer from "./Screens/HomePageScreenVo";
import HomepageMember  from "./Screens/HomePageScreenMem";
import MainScreen from "./Screens/MainScreen";



export default function App() {
  const [DB, setDB] = useState();

  useEffect(() => {

  }, []);

  const Stack = createStackNavigator();
    return (

      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} /> 
          <Stack.Screen name="HomepageVolunteer" component={HomepageVolunteer} />
          <Stack.Screen name="HomepageMember" component={HomepageMember} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>

    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
