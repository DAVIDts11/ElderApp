import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import moment from 'moment';
import Time from '../Components/time';

const Request = (props) => {
  const { currentUser } = useSelector((state) => state.user);

  const [date, setDate] = useState();
  useEffect(() => {
    setDate(new Date(props.req.childObj.date));
    return () => {};
  }, []);

  const time = moment(props.req.childObj.date || moment().format('MMMM Do YYYY, h:mm a'));
  console.log(time);

  function onprs() {}

  return (
    <TouchableOpacity onPress={onprs}>
      <View style={props.req.childObj.takenCareStatus ? styles.TakenCareContener : styles.contener}>
        <View>
          <Text>Name: {props.req.childObj.name}</Text>
          <Text>Amount needed: {props.req.childObj.amount} </Text>
          <Text>Contact E-mail: {props.req.childObj.user_email} </Text>
          {/* <Text onPress={()=>{Linking.openURL(`tel:${props.req.childObj.phoneNumber}`);}}></Text> */}
          <Text>Contact Phone: {props.req.childObj.phoneNumber} </Text>
          <Time time={time} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contener: {
    backgroundColor: 'palegoldenrod',
    borderWidth: 2.5,
    borderColor: 'gray',
    padding: 10,
    // flexDirection: 'row-reverse',
    width: '95%',
    marginTop: 10,
    fontFamily: 'tahoma',
  },
  TakenCareContener: {
    backgroundColor: 'honeydew',
    borderWidth: 2.5,
    borderColor: 'gray',
    padding: 10,
    // flexDirection: 'row-reverse',
    width: '95%',
    marginTop: 10,
    fontFamily: 'tahoma',
  },
});

export default Request;
