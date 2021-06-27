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
          <Text style={styles.innerText}>
            Name: <Text style={styles.outterText}>{props.req.childObj.name}</Text>
          </Text>
          <Text style={styles.innerText}>
            Amount needed: <Text style={styles.outterText}>{props.req.childObj.amount}</Text>
          </Text>
          <Text style={styles.innerText}>
            Contact E-mail: <Text style={styles.outterText}>{props.req.childObj.user_email}</Text>
          </Text>
          <Text style={styles.innerText}>
            Contact Phone: <Text style={styles.outterText}>{props.req.childObj.phoneNumber}</Text>
          </Text>
          {/* <Text onPress={()=>{Linking.openURL(`tel:${props.req.childObj.phoneNumber}`);}}></Text> */}
          <Time time={time} style={styles.innerText} />
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
export default Request;
