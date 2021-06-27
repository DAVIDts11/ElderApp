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
          <Text>{props.req.childObj.destination}</Text>
          <Text>{props.req.childObj.pickUpDate} </Text>
          <Text>{props.req.childObj.pickUpPlace} </Text>
          <Text>{props.req.childObj.pickUpTime} </Text>
          <Text>{props.req.childObj.phone} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contener: {
    backgroundColor: 'honeydew',
    borderWidth: 2.5,
    borderColor: 'gray',
    padding: 10,
    flexDirection: 'row-reverse',
    width: '95%',
    marginTop: 10,
    fontFamily: 'tahoma',
  },
  TakenCareContener:{
    backgroundColor: 'honeydew',
    borderWidth: 2.5,
    borderColor: 'gray',
    padding: 10,
    flexDirection: 'row-reverse',
    width: '95%',
    marginTop: 10,
    fontFamily: 'tahoma',
  }
});

export default RequestPickUp;
