import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { useSelector } from "react-redux";
import moment from "moment";
import Time from "../Components/time";
import database from "../config/fireBaseConfig";

const Request = (props) => {
  const { currentUser } = useSelector((state) => state.user);

  const [takenStatus, setTakenStatus] = useState(false);
  useEffect(() => {
    setTakenStatus(props.req.childObj.takenCareStatus);
    return () => {};
  }, []);

  const time = moment(props.req.childObj.date || moment().format('MMMM Do YYYY, h:mm a'));

  function changeTakenStatus() {
    if (takenStatus) {
      Alert.alert(
        "Would you like to take care of this request?",
        'Status will be changed to "taking care"',
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              database
                .ref("medRequest/" + props.req.childKey)
                .update({ takenCareStatus: false });
              setTakenStatus(false);
              console.log("OK Pressed");
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Would you like to take care of this request?",
        'Status will be changed to "taking care"',
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              database
                .ref("medRequest/" + props.req.childKey)
                .update({ takenCareStatus: true });
              setTakenStatus(true);
              console.log("OK Pressed");
            },
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
            Name:{" "}
            <Text style={styles.outterText}>{props.req.childObj.name}</Text>
          </Text>
          <Text style={styles.innerText}>
            Amount needed:{" "}
            <Text style={styles.outterText}>{props.req.childObj.amount}</Text>
          </Text>
          <Text style={styles.innerText}>
            Contact E-mail:{" "}
            <Text style={styles.outterText}>
              {props.req.childObj.user_email}
            </Text>
          </Text>
          <Text style={styles.innerText}>
            Contact Phone:{" "}
            <Text style={styles.outterText}>
              {props.req.childObj.phoneNumber}
            </Text>
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
    backgroundColor: "#F29B9B",
    borderWidth: 2.5,
    borderRadius: 10,
    borderColor: "#FFFFFF",
    padding: 10,
    width: "95%",
    marginTop: 10,
    fontFamily: "tahoma",
    fontSize: 18,
  },
  TakenCareContener: {
    backgroundColor: "#B9DCB4",
    borderWidth: 2.5,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    width: "95%",
    marginTop: 10,
    fontFamily: "tahoma",
  },
  innerText: {
    color: "#05375a",
    fontWeight: "bold",
  },
  outterText: {
    color: "#05375a",
    fontWeight: "normal",
  },
});
export default Request;
