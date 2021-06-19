import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";


const MainScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="Sign Up"
        onPress={() => {
          return navigation.navigate('Sign Up');
        }}
      ></Button>

      <Button
        title="Login"
        onPress={() => {
            return navigation.navigate('Login');
        }}
      ></Button>
    </View>
  );
};

export default MainScreen;
