import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import SelectPicker from 'react-native-form-select-picker';
import { useDispatch } from 'react-redux';
import { SIGNUP_ACTION } from '../Store/actions/userAction';
import database from '../config/fireBaseConfig';

const SignUp = ({ navigation }) => {
  const options = ['Club Member', 'Volunteer'];

  const [data, setData] = useState({
    email: '',
    password: '',
    confirm_password: '',
    name: '',
    phone: '',
    selected: '',
    check_textInputChange: false,
    check_nameInputChange: false,
    check_handlePhoneChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const [email] = useState('');

  const [password] = useState('');
  const [selected, setSelected] = useState('');

  const dispatch = useDispatch();

  const validRegex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

  const createTwoButtonAlertSignUp = () =>
    Alert.alert(
      'Email exists already!',
      'Error signing in',
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

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <View style={styles.footer}>
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
              <View>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            ) : null}
          </View>
          {data.isValidEmail ? null : (
            <View>
              <Text style={styles.errorMsg}>
                Email must contain '@' and a domain. Ex- bob@alice.com
              </Text>
            </View>
          )}

          <Text style={styles.passwardtext}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={!!data.secureTextEntry}
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
            <View>
              <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </View>
          )}
          <Text style={styles.nameText}>Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Full Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => nameInputChange(val)}
            />
            {data.check_nameInputChange ? (
              <View>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            ) : null}
          </View>
          <Text style={styles.phoneText}>Phone</Text>
          <View style={styles.action}>
            <FontAwesome name="phone" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Phone Number"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePhoneChange(val)}
            />
          </View>
          {data.isValidPhone ? null : (
            <View>
              <Text style={styles.errorMsg}>Phone number must be 10 numbers long.</Text>
            </View>
          )}

          <Text style={styles.userTypeText}>User Type</Text>

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
          <View style={styles.action} />

          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={async () => {
                const User = {
                  email: data.email,
                  password: data.password,
                  selected,
                  phone: data.phone,
                  name: data.name,
                };
                //check if user exists function
                let error = false;
                await database
                  .ref('users')
                  .get()
                  .then((snapshot) => {
                    snapshot.forEach((child) => {
                      if (child.val().email === User.email) {
                        error = true;
                        createTwoButtonAlertSignUp();
                        console.log('User with this email exists!');
                      }
                    });
                  })
                  .catch((error) => {
                    console.error(error);
                  });
                if (error === false) {
                  database.ref('users').push(User);
                  dispatch(SIGNUP_ACTION.userSignUp(User));

                  console.log(
                    `Your email is ${email} \n and your password  is ${password}\n. You are ${selected}`,
                  );
                  if (User.selected === 'Volunteer') {
                    navigation.navigate('HomepageVolunteer');
                  } else {
                    navigation.navigate('HomepageMember');
                  }
                }
              }}
            >
              <LinearGradient colors={['#98bc98', '#91c391']} style={styles.signIn}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.signInTouchble}>
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUp;

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
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
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
  passwardtext: {
    marginTop: 35,
    color: '#05375a',
    fontSize: 18,
  },
  nameText: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 35,
  },
  phoneText: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 35,
  },
  userTypeText: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 35,
  },
  signUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  signInTouchble: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#60a860',
    borderWidth: 1,
    marginTop: 15,
  },
  signInText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#60a860',
  },
});
