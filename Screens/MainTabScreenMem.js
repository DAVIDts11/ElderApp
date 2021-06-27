import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomepageMember from './HomePageScreenMem';
import PickMeUpForm from './pickMeUpForm';
import OverMedicationForm from './overMedicationForm';
import ViewPage from './viewRequests';

const Tab = createMaterialBottomTabNavigator();

const MainTabScreenMember = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomepageMember}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#DCDCDA',
        tabBarIcon: ({ color }) => <Icon name="ios-home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Pick Me Up"
      component={PickMeUpForm}
      options={{
        tabBarLabel: 'PickUp',
        tabBarColor: '#A0CFEF',
        tabBarIcon: ({ color }) => <Icon name="car" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Request Meds"
      component={OverMedicationForm}
      options={{
        tabBarLabel: 'Meds',
        tabBarColor: '#ECBDC7',
        tabBarIcon: ({ color }) => <Icon name="medkit" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="ViewPage"
      component={ViewPage}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#F0CC99',
        tabBarIcon: ({ color }) => <Icon name="clipboard" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);
export default MainTabScreenMember;
