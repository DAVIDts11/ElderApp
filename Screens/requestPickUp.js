import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text,Alert, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import database from '../config/fireBaseConfig';

const RequestPickUp = (props) => {
  const { currentUser } = useSelector((state) => state.user);

  const [takenStatus, setTakenStatus] = useState(false);
  useEffect(() => {
    setTakenStatus(props.req.childObj.takenCareStatus);
    return () => { };
  }, []);

 
  function changeTakenStatus() {
    if (takenStatus) {
      Alert.alert(
        'Change status of request',
        'To: "Not taken care ?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK', onPress: () => {
              database.ref('medRequest/' + props.req.childKey).update({ takenCareStatus: false });
              setTakenStatus(false);
              console.log('OK Pressed')
            }
          },
        ],
        { cancelable: false }


      );
    }
    else {
      Alert.alert(
        'Chenge status of request',
        'To: "Taken care ?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK', onPress: () => {
              database.ref('medRequest/' + props.req.childKey).update({ takenCareStatus: true });
              setTakenStatus(true);
              console.log('OK Pressed');
            }
          },
        ],
        { cancelable: false }


      );

    }
  }

  return (
    <TouchableOpacity onPress={changeTakenStatus}>
      <View style={takenStatus ? styles.TakenCareContener : styles.contener}>
        <View>
          <Text style={styles.innerText}>
            Destination: <Text style={styles.outterText}>{props.req.childObj.destination}</Text>
          </Text>
          <Text style={styles.innerText}>
            Pick-Up Place: <Text style={styles.outterText}>{props.req.childObj.pickUpPlace}</Text>
          </Text>
          <Text style={styles.innerText}>
            Pick-Up Date: <Text style={styles.outterText}>{props.req.childObj.pickUpDate}</Text>
          </Text>
          <Text style={styles.innerText}>
            Pick-Up Time: <Text style={styles.outterText}>{props.req.childObj.pickUpTime}</Text>
          </Text>
          <Text style={styles.innerText}>
            Contact Phone: <Text style={styles.outterText}>{props.req.childObj.phone}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contener: {
    backgroundColor: '#F29B9B',
    borderWidth: 2.5,
    borderRadius: 10,
    borderColor: '#FFFFFF',
    padding: 10,
    width: '95%',
    marginTop: 10,
    fontFamily: 'tahoma',
    fontSize: 18,
  },
  TakenCareContener: {
    backgroundColor: '#B9DCB4',
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    width: '95%',
    marginTop: 10,
    fontFamily: 'tahoma',
  },
  innerText: {
    color: '#05375a',
    fontWeight: 'bold',
  },
  outterText: {
    color: '#05375a',
    fontWeight: 'normal',
  },
});

export default RequestPickUp;
