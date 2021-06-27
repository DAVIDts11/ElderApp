import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomepageVolunteer from './HomePageScreenVo';
import ViewPage from './viewRequests';
import ViewPickUp from './viewPickUpRequests';
import Empty from './Settings';

const TabsVol = createMaterialBottomTabNavigator();

const MainTabScreenVol = () => (
  <TabsVol.Navigator>
    <TabsVol.Screen
      name="Home"
      component={HomepageVolunteer}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#CCCCCC',
        tabBarIcon: ({ color }) => <Icon name="ios-home" color={color} size={26} />,
      }}
    />
    <TabsVol.Screen
      name="PickupVol"
      component={ViewPickUp}
      options={{
        tabBarLabel: 'PickUp Reqs',
        tabBarColor: '#A0CFEF',
        tabBarIcon: ({ color }) => <Icon name="car" color={color} size={26} />,
      }}
    />
    <TabsVol.Screen
      name="ViewPageVol"
      component={ViewPage}
      options={{
        tabBarLabel: 'Med Reqs',
        tabBarColor: '#ECBDC7',
        tabBarIcon: ({ color }) => <Icon name="medkit" color={color} size={26} />,
      }}
    />
    <TabsVol.Screen
      name="Empty"
      component={Empty}
      options={{
        tabBarLabel: 'Settings',
        tabBarColor: '#DFD7F7',
        tabBarIcon: ({ color }) => <Icon name="settings" color={color} size={26} />,
      }}
    />
  </TabsVol.Navigator>
);
export default MainTabScreenVol;
