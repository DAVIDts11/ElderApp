import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/LoginScreen';
import SignUp from '../Screens/SignUpScreen';
import MainScreen from '../Screens/MainScreen';
import Homepage from '../Screens/HomePageScreen';

const Stack = createStackNavigator();

const MyStack = () => {
  
return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Main Screen" component={MainScreen}/>
        <Stack.Screen name="Homepage" component={Homepage}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
