import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  StatusBar,
  TouchableOpacity
} from "react-native";
import database from "../config/fireBaseConfig";
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const overMedicationForm = ({ navigation }) => {
  const { currentUser } = useSelector((state) => state.user);
  console.log("current user = ", currentUser);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [Information, setInformation] = useState("");
 
  const createTwoButtonAlertOTC = () =>
    Alert.alert(
      "Success!",
      "You have submitted a request for OTC Medication",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>Request over the counter meds</Text>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}
        >
          Medication Name
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Medication Name"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}
        >
          Amount
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Amount of the Medication"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            value={amount}
            onChangeText={(text) => setAmount(text)}
          />
        </View>
        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}
        >
          Extra Information
        </Text>
        <View style={styles.action}>
          <TextInput
            placeholder="Extra Information about the pills you want"
            placeholderTextColor="#666666"
            style={styles.textInput}
            autoCapitalize="none"
            value={Information}
            onChangeText={(text) => setInformation(text)}
          />
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={async () => {
              console.log("pressed");
              let today = Date.now();
              let request = {
                name,
                amount,
                Information,
                date: today,
                user_email: currentUser.email,
              };
              database.ref("medRequest").push(request);
              createTwoButtonAlertOTC();
              navigation.navigate("Home");
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
                Request Medication
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECBDC7",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
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
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
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
  submitButton: {
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});

export default overMedicationForm;
