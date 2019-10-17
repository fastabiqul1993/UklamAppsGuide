import Home from '../Screens/AppScreens/Home';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  PackageList: {
    screen: PackageList,
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

export default HomeStack;
