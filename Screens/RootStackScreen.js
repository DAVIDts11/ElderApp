import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './MainScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomepageVolunteer from './HomePageScreenVo';
import MainTabScreenMember from './MainTabScreenMem';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="MainScreen" component={MainScreen} />
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="SignUp" component={SignUpScreen} />
    <RootStack.Screen name="HomepageVolunteer" component={HomepageVolunteer} />
    <RootStack.Screen name="HomepageMember" component={MainTabScreenMember} />
    <RootStack.Screen name="pickMeUpForm" component={MainTabScreenMember} />
    <RootStack.Screen name="overMedicationForm" component={MainTabScreenMember} />
    <RootStack.Screen name="ViewPage" component={MainTabScreenMember} />
  </RootStack.Navigator>
);

export default RootStackScreen;
