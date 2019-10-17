import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Nature from '../Screens/AppScreens/PackageList/Nature';
import Artificial from '../Screens/AppScreens/PackageList/Artificial';
import Horror from '../Screens/AppScreens/PackageList/Horror';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Third Text: '#8C8D99'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

export const TabScreen = createMaterialTopTabNavigator(
  {
    Nature: {screen: Nature},
    Artificial: {screen: Artificial},
    Horror: {screen: Horror},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FB724A',
      inactiveTintColor: '#8C8D99',
      style: {
        backgroundColor: '#FAFAFA',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#FB724A',
        borderBottomWidth: 3,
      },
    },
  },
);
