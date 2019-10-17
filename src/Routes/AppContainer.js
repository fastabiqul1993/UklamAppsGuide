import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {HomeStack as Stack} from './RouteStack';

const AppContainer = createSwitchNavigator(
  {
    App: Stack,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(AppContainer);
