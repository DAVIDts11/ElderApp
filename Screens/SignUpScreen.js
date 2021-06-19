import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Button, Text, Item } from "react-native";
import SelectPicker from "react-native-form-select-picker";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP_ACTION } from "../Store/actions/userAction";

const SignUp = (props) => {
  const options = ["Club Member", "Volunteer"];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState();

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

      <SelectPicker
        style={styles.selector}
        onValueChange={(value) => {
          // Do anything you want with the value.
          // For example, save in state.
          setSelected(value);
        }}
        selected={selected}
        placeholder="User Type"
      >
        {Object.values(options).map((val, index) => (
          <SelectPicker.Item label={val} value={val} key={index + 5} />
        ))}
      </SelectPicker>
      <Button
        style={styles.button}
        title="Sign Up"
        onPress={() => {
          const User = {
            email,
            password,
            selected,
          };
          //check if user exists function
          props.DB.ref("users").push(User);
          dispatch(SIGNUP_ACTION.userSignUp(User));
          console.log(
            `Your email is ${email} \n and your password  is ${password}\n. You are ${selected}`
          );
        }}
      />

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

export default SignUp;
