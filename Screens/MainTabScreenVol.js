import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomepageVolunteer from './HomePageScreenVo';
import ViewPage from './viewRequests';
import ViewPickUp from './viewPickUpRequests';
import MainScreen from './MainScreen';
import Empty from './EmptyPage';

const TabsVol = createMaterialBottomTabNavigator();

const MainTabScreenVol = () => (
  <TabsVol.Navigator>
    <TabsVol.Screen
      name="Home"
      component={HomepageVolunteer}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#DCDCDA',
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
        tabBarLabel: 'Call',
        tabBarColor: '#F0CC99',
        tabBarIcon: ({ color }) => <Icon name="call" color={color} size={26} />,
      }}
    />
  </TabsVol.Navigator>
);
export default MainTabScreenVol;
