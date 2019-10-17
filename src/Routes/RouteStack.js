import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'native-base';
//Home...
import Home from '../Screens/AppScreens/Home';
// import Home from './Home';
//Package...

import PackageList from '../Screens/AppScreens/PackageList';
import {TabScreen} from '../Routes/PackageListNav';
import DetailPackage from '../Screens/AppScreens/DetailPackage';
import AddPackage from '../Screens/AppScreens/AddPackage';
import EditPackage from '../Screens/AppScreens/EditPackage';
//Profile...
import Profile from '../Screens/AppScreens/Profile';
import {BottomNav} from './BottomNav';

export const HomeStack = createStackNavigator({
  Home: {
    screen: BottomNav,
    navigationOptions: {
      header: null,
    },
  },
  Chat: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
  PackageList: {
    screen: TabScreen,
    navigationOptions: {
      header: null,
    },
  },

  DetailPackage: {
    screen: DetailPackage,
    navigationOptions: {
      header: null,
    },
  },
  AddPackage: {
    screen: AddPackage,
    navigationOptions: {
      header: null,
    },
  },
  EditPackage: {
    screen: EditPackage,
    navigationOptions: {
      header: null,
    },
  },
});
