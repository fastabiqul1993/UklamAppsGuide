import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import FirstPage from '../Screens/AppScreens/OrderList/PageOne';

//Color pallete
// Title Text: '#171719'
// Second Text: '#3C3C3E'
// Third Text: '#8C8D99'
// Primary Color : '#FB724A'
// Line Color : '#E5E5E5'

const TabScreen = createMaterialTopTabNavigator(
  {
    Order: {screen: FirstPage},
    History: {screen: FirstPage},
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

//making a StackNavigator to export as default
const HomeNav = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      header: null,
    },
  },
});
export default createAppContainer(HomeNav);
