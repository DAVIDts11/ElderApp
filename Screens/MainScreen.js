import React from "react";
import { View, Text, Button , StyleSheet} from "react-native";
import { useDispatch, useSelector } from "react-redux";


const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Sign Up"
        onPress={() => {
          return navigation.navigate('SignUp');
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



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "peachpuff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});