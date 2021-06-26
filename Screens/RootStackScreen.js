import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "./MainScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import HomepageVolunteer from "./HomePageScreenVo";
import HomepageMember from "./HomePageScreenMem";
import pickMeUpForm from "./pickMeUpForm";
import overMedicationForm from "./overMedicationForm";
import ViewPage from "./viewRequests";


const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="MainScreen" component={MainScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="SignUp" component={SignUpScreen} />
    <RootStack.Screen name="HomepageVolunteer" component={HomepageVolunteer} />
    <RootStack.Screen name="HomepageMember" component={HomepageMember} />
    <RootStack.Screen name="pickMeUpForm" component={pickMeUpForm} />
    <RootStack.Screen name="overMedicationForm" component={overMedicationForm}/>
    <RootStack.Screen name="ViewPage" component={ViewPage} />
  </RootStack.Navigator>
);

export default RootStackScreen;