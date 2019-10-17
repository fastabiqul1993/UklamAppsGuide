/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {Root} from 'native-base';
import store from './Public/store';
import AppContainer from './Routes/AppContainer';

const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider>
    </Fragment>
  );
};

console.disableYellowBox = true;

export default App;
