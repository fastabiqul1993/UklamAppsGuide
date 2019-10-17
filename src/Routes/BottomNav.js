import React from 'react';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'native-base';

//Home...
import Home from '../Screens/AppScreens/Home';
//Package...
import PackageList from '../Screens/AppScreens/PackageList';
import {TabScreen} from '../Routes/PackageListNav';

//Profile...
import Profile from '../Screens/AppScreens/Profile';

export const BottomNav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="Ionicons"
            name="planet"
            style={{fontSize: 24, color: tintColor, marginTop: 5}}
          />
        ),
      },
    },
    PackageList: {
      screen: TabScreen,
      navigationOptions: {
        tabBarLabel: 'Package',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="Ionicons"
            name="albums"
            style={{fontSize: 24, color: tintColor, marginTop: 5}}
          />
        ),
      },
    },
    Chat: {
      screen: PackageList,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="Ionicons"
            name="chatbubbles"
            style={{fontSize: 24, color: tintColor, marginTop: 5}}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="Ionicons"
            name="contact"
            style={{fontSize: 24, color: tintColor, marginTop: 5}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#FB724A',
      inactiveTintColor: '#8C8D99',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        paddingVertical: 3,
        height: 55,
        elevation: 2,
      },
    },
  },
);
