import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

import { useDispatch } from 'react-redux';
import { LOGIN_ACTION } from '../Store/actions/userAction';
import database from '../config/fireBaseConfig';

const Login = ({ navigation }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const dispatch = useDispatch();

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
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

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Incorrect email or password!',
      'Error logging in',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text_title}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="black" size={20} />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <View>
              <Feather name="check-circle" color="green" size={20} />
            </View>
          ) : null}
        </View>
        <Text style={styles.text_title_pw}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="black" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={!!data.secureTextEntry}
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="black" size={20} />
            ) : (
              <Feather name="eye" color="red" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={async () => {
              const User = {
                email: data.email,
                password: data.password,
                selected: '',
                phone: '',
                name: '',
              };
              let matched = false;
              //check if user exists function
              await database
                .ref('users')
                .get()
                .then((snapshot) => {
                  snapshot.forEach((child) => {
                    if (child.val().email === User.email) {
                      if (child.val().password === User.password) {
                        matched = true;
                        console.log('Welcome!', child.val().selected);
                        User.selected = child.val().selected;
                        User.phone = child.val().phone;
                        User.name = child.val().name;
                        dispatch(LOGIN_ACTION.userLogin(User));
                        console.log(
                          `Your email is ${data.email} \n and your password  is ${data.password}\n. You are  ${User.selected} `,
                        );
                        if (child.val().selected === 'Volunteer') {
                          navigation.navigate('HomepageVolunteer');
                        } else {
                          navigation.navigate('HomepageMember');
                        }
                      }
                    }
                  });
                })
                .catch((error) => {
                  console.error(error);
                });
              if (matched === false) {
                console.log('Incorrect email or password');
                createTwoButtonAlert();
              }
            }}
          >
            <LinearGradient colors={['#98bc98', '#91c391']} style={styles.signIn}>
              <Text style={styles.textAdd}>Sign In</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.signinFir}>
            <Text style={styles.textSec}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2D4B2',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    fontSize: 100,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 60,
  },
  text_title: {
    fontSize: 40,
  },
  text_title_pw: {
    fontSize: 40,
    marginTop: 35,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 22,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textAdd: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  textSec: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#009387',
  },
  signinFir: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
  },
});
