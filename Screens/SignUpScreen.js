import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Button, Text, Item } from "react-native";
import SelectPicker from "react-native-form-select-picker";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP_ACTION } from "../Store/actions/userAction";
import database from "../config/fireBaseConfig";

const SignUp = ({ navigation }) => {
  const options = ["Club Member", "Volunteer"];
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState("");
  const [showError, setShowError] = useState(false);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <View style={styles.contener}>
      {showError ? (
        <Text style={styles.errorMsg}>
          {" "}
          "User with ehis email is allrady exist !!{" "}
        </Text>
      ) : null}

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
      <TextInput
        style={styles.textInput}
        placeholder="Enter phone number"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter full name"
        value={name}
        onChangeText={(text) => setName(text)}
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
        onPress={async () => {
          const User = {
            email,
            password,
            name,
            phone,
            selected,
          };
          //check if user exists function
          let error = false;
          await database
            .ref("users")
            .get()
            .then((snapshot) => {
              snapshot.forEach((child) => {
                if (child.val().email == User.email) {
                  error = true;
                  console.log("User with ehis email is allrady exist  !!!");
                  setShowError(true);
                }
              });
            })
            .catch((error) => {
              console.error(error);
            });
          if (error == false) {
            database.ref("users").push(User);
            dispatch(SIGNUP_ACTION.userSignUp(User));

            console.log(
              `Your email is ${email} \n and your password  is ${password}\n. You are ${selected}`
            );
            if (User.selected == "Volunteer") {
              navigation.navigate("HomepageVolunteer");
            } else {
              navigation.navigate("HomepageMember");
            }
          }
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
  errorMsg: {
    color: "red",
  },
  button: {},
});

export default SignUp;
