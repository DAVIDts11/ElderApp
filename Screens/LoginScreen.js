import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Button, Text, Item } from "react-native";
import SelectPicker from "react-native-form-select-picker";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_ACTION } from "../Store/actions/userAction";
import firebase from "firebase";

const Login = () => {
  const options = ["Club Member", "Volunteer"];

  // remove these initial assignments after testing
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <View style={styles.contener}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* <Button
        style={styles.button}
        title="Login"
        onPress={() => {
          const User = {
            email,
            password,
          };
          //check if user exists function
          DB.ref("users")
            .get()
            .then((snapshot) => {
              if (snapshot.exists()) {
                console.log(snapshot.val());
              } else {
                console.log("No data available");
              }
            })
            .catch((error) => {
              console.error(error);
            });
          dispatch(LOGIN_ACTION.userLogin(User));
          console.log(
            `Your email is ${email} \n and your password  is ${password}\n. You are ${selected}`
          );
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: "peachpuff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  textInput: {
    backgroundColor: "cornsilk",
    width: 250,
    height: 50,
    marginBottom: 30,
  },
  selector: {
    backgroundColor: "cornsilk",
    width: 250,
    height: 50,
    marginBottom: 30,
  },
  button: {},
});

export default Login;
