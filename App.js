import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import SignUp from "./Screens/SignUpScreen";
import HomePage from "./Screens/HomePageScreen";
import firebase from "firebase";


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

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <SignUp DB={DB} style={styles.SignUp}> </SignUp>
        <HomePage></HomePage>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  SignUp: {},
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
