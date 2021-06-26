import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  StatusBar,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

const HomepageMember = ({ navigation }) => {
  const { currentUser } = useSelector((state) => state.user);
  console.log("store user = ", currentUser);
  const onPress = () => console.log("pressed");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.text_header}>Hello {currentUser.email}!</Text>
      </View>

      <View style={styles.footer} animation="fadeInUpBig">
      
      <TouchableOpacity
            onPress={() => navigation.navigate("Request Meds")}
            style={[
              styles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                    color: "#98bc98",
                },
              ]}
            >
              Request Over The Counter Medication
            </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("Pick Me Up")}
            style={[
              styles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                    color: "#98bc98",
                },
              ]}
            >
              Request A Pick Up Ride!
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("ViewPage")}
            style={[
              styles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#98bc98",
                },
              ]}
            >
              My Requests
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("Request Meds")}
            style={[
              styles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                    color: "#98bc98",
                },
              ]}
            >
              Request Over The Counter Medication
            </Text>
            </TouchableOpacity>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#DCDCDA",
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
      backgroundColor: "gray",
      marginTop: 50,
      width: 140,
      height: 140,
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
export default HomepageMember;
