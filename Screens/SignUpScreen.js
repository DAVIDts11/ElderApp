import { useState, useEffect } from "react";
import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import SelectPicker from "react-native-form-select-picker";
import { useDispatch, useSelector } from "react-redux";
import { SIGNUP_ACTION } from "../Store/actions/userAction";
import database from "../config/fireBaseConfig";

const SignUp = ({ navigation }) => {
  const options = ["Club Member", "Volunteer"];

  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    name: "",
    phone: "",
    selected: "",
    check_textInputChange: false,
    check_nameInputChange: false,
    check_handlePhoneChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState("");
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();

  const validRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;



  const textInputChange = (val) => {
    
    if (val.match(validRegex)) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidEmail: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const nameInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        name: val,
        check_nameInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        name: val,
        check_nameInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePhoneChange = (val) => {
    if (val.trim().length >= 10) {
      setData({
        ...data,
        phone: val,
        check_handlePhoneChange: true,
        isValidPhone: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        check_handlePhoneChange: false,
        isValidPhone: false,
      });
    }
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };


  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="envelope" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidEmail ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Email must contain '@' and a domain. Ex- bob@alice.com
            </Text>
          </Animatable.View>
        )}


          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Name
          </Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Full Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => nameInputChange(val)}
            />
            {data.check_nameInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Phone
          </Text>
          <View style={styles.action}>
            <FontAwesome name="phone" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Phone Number"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePhoneChange(val)}
            />
            {data.check_handlePhoneChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidPhone ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Phone number must be 10 numbers long.
            </Text>
          </Animatable.View>
        )}

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            User Type
          </Text>

          <SelectPicker
            style={styles.textInput}
            onValueChange={(value) => {
              // Do anything you want with the value.
              // For example, save in state.
              setSelected(value);
            }}
            selected={selected}
            placeholder="Choose one"
          >
            {Object.values(options).map((val, index) => (
              <SelectPicker.Item label={val} value={val} key={index + 5} />
            ))}
          </SelectPicker>
          <View style={styles.action}></View>

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={async () => {
                const User = {
                  email: data.email,
                  password: data.password,
                  selected: data.selected,
                  phone: data.phone,
                  name: data.name,
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
                        console.log(
                          "User with ehis email is allrady exist  !!!"
                        );
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
            >
              <LinearGradient
              colors={["#98bc98", "#91c391"]}
              style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign Up
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={[
                styles.signIn,
                {
                  borderColor: "#60a860",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#60a860",
                  },
                ]}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};
//   return (
//     <View style={styles.contener}>
//       {showError ? (
//         <Text style={styles.errorMsg}>
//           {" "}
//           "User with ehis email is allrady exist !!{" "}
//         </Text>
//       ) : null}

//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter email"
//         value={email}
//         onChangeText={(text) => setEmail(text)}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter password"
//         secureTextEntry={true}
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter phone number"
//         value={phone}
//         onChangeText={(text) => setPhone(text)}
//       />
//       <TextInput
//         style={styles.textInput}
//         placeholder="Enter full name"
//         value={name}
//         onChangeText={(text) => setName(text)}
//       />

//       <SelectPicker
//         style={styles.selector}
//         onValueChange={(value) => {
//           // Do anything you want with the value.
//           // For example, save in state.
//           setSelected(value);
//         }}
//         selected={selected}
//         placeholder="User Type"
//       >
//         {Object.values(options).map((val, index) => (
//           <SelectPicker.Item label={val} value={val} key={index + 5} />
//         ))}
//       </SelectPicker>
//       <Button
//         style={styles.button}
//         title="Sign Up"
// onPress={async () => {
//   const User = {
//     email,
//     password,
//     name,
//     phone,
//     selected,
//   };
//   //check if user exists function
//   let error = false;
//   await database
//     .ref("users")
//     .get()
//     .then((snapshot) => {
//       snapshot.forEach((child) => {
//         if (child.val().email == User.email) {
//           error = true;
//           console.log("User with ehis email is allrady exist  !!!");
//           setShowError(true);
//         }
//       });
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   if (error == false) {
//     database.ref("users").push(User);
//     dispatch(SIGNUP_ACTION.userSignUp(User));

//     console.log(
//       `Your email is ${email} \n and your password  is ${password}\n. You are ${selected}`
//     );
//     if (User.selected == "Volunteer") {
//       navigation.navigate("HomepageVolunteer");
//     } else {
//       navigation.navigate("HomepageMember");
//     }
//   }
// }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   contener: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: Platform.OS === "android" ? 25 : 0,
//   },
//   textInput: {
//     backgroundColor: "cornsilk",
//     width: 250,
//     height: 50,
//     marginBottom: 30,
//   },
//   selector: {
//     backgroundColor: "cornsilk",
//     width: 250,
//     height: 50,
//     marginBottom: 30,
//   },
//   errorMsg: {
//     color: "red",
//   },
//   button: {},
// });

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B2D4B2",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
