import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import database from '../config/fireBaseConfig';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

const PickMeUpForm = ({ navigation }) => {
  const { currentUser } = useSelector((state) => state.user);

  const [pickUpPlace, setpickUpPlace] = useState('');
  const [destination, setDestination] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [pickUpDate, setPickUpDate] = useState('');

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Success!',
      'You have submitted a request to be picked-up',
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
        <Text style={styles.text_header}>Give me a Ride!</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.pickUpPlaceText}>Pick-Up Place</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Where do I get picked-up?"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            value={pickUpPlace}
            onChangeText={(text) => setpickUpPlace(text)}
          />
        </View>
        <Text style={styles.disAddrText}>Destination Address</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Where am I going?"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            value={destination}
            onChangeText={(text) => setDestination(text)}
          />
        </View>
        <Text style={styles.pickTimeText}>Pick-Up Time</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="When do I want to be picked up?"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            value={pickUpTime}
            onChangeText={(text) => setPickUpTime(text)}
          />
        </View>
        <Text style={styles.pickDateText}>Pick-Up Date</Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Pick me up on what day?"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            value={pickUpDate}
            onChangeText={(text) => setPickUpDate(text)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={async () => {
              const pickUprequest = {
                pickUpPlace,
                destination,
                pickUpTime,
                pickUpDate,
                user_email: currentUser.email,
                takenCareStatus: false,
                volonteerName: '',
                phoneNumber: currentUser.phone,
              };
              await database.ref('pickMeUpRequest').push(pickUprequest);
              createTwoButtonAlert();
              navigation.navigate('Home');
            }}
          >
            <LinearGradient colors={['#98bc98', '#91c391']} style={styles.signIn}>
              <Text style={styles.reqText}>Request Pick-Up</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PickMeUpForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A0CFEF',
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
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
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
  reqText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  pickUpPlaceText: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 35,
  },
  disAddrText: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 35,
  },
  pickTimeText: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 35,
  },
  pickDateText: {
    color: '#05375a',
    fontSize: 18,
    marginTop: 35,
  },
});
