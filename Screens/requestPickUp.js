import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const RequestPickUp = (props) => {
  const { currentUser } = useSelector((state) => state.user);

  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date(props.req.childObj.date));
    return () => {};
  }, []);

  function onprs() {}

  return (
    <TouchableOpacity onPress={onprs}>
      <View style={props.req.childObj.takenCareStatus?styles.TakenCareContener: styles.contener}>
        <View>
        <Text style={styles.innerText}>Destination: <Text style={styles.outterText}>{props.req.childObj.destination}</Text></Text>
        <Text style={styles.innerText}>Pick-Up Place: <Text style={styles.outterText}>{props.req.childObj.pickUpPlace}</Text></Text>
        <Text style={styles.innerText}>Pick-Up Date: <Text style={styles.outterText}>{props.req.childObj.pickUpDate}</Text></Text>
        <Text style={styles.innerText}>Pick-Up Time: <Text style={styles.outterText}>{props.req.childObj.pickUpTime}</Text></Text>
        <Text style={styles.innerText}>Contact Phone: <Text style={styles.outterText}>{props.req.childObj.phone}</Text></Text>
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
  innerText:{
    color: '#05375a',
    fontWeight: 'bold',
  },
  outterText:{
    color:'#05375a',
    fontWeight: 'normal',

  }
});

export default RequestPickUp;
