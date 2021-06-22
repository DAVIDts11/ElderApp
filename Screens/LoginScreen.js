import React, { useState, useEffect } from "react";
import { View, TextInput, StyleSheet, Button, Text, Item } from "react-native";
import SelectPicker from "react-native-form-select-picker";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_ACTION } from "../Store/actions/userAction";
import firebase from "firebase";
import database from "../config/fireBaseConfig";

const Login = ({navigation}) => {
  const options = ["Club Member", "Volunteer"];

  // remove these initial assignments after testing
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <View style={styles.contener}>
     { showError ? <Text style={styles.errorMsg}> Incorrect email or passward </Text> : null }
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

      <Button
        style={styles.button}
        title="Login"
        onPress={async () => {
          let User = {
            email,
            password,
            selected:""
          };
           let matched = false;
          //check if user exists function
          await database.ref("users")
            .get().then( (snapshot) => {
              snapshot.forEach((child) => {
                if (child.val().email==User.email){
                  if (child.val().password == User.password){
                    matched=true;
                    console.log("Wellcom  !!!" , child.val().selected);
                    User.selected = child.val().selected;
                    dispatch(LOGIN_ACTION.userLogin(User));
                    console.log(
                      `Your email is ${email} \n and your password  is ${password}\n. You are  ${User.selected} `
                    );
                    if(child.val().selected == "Volunteer"){
                      navigation.navigate('HomepageVolunteer');
                    }
                    else {
                      navigation.navigate('HomepageMember');
                    }
                    
                  }
                }
              });
              }).catch((error) => {
              console.error(error);
            });
            if (matched==false){
              console.log("Incorrect email or passward"); 
              setShowError(true);  
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
  errorMsg:{
    color:"red"
  },
  button: {},
});

export default Login;
