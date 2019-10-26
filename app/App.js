/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Navigation from './navigation';
import {createAppContainer} from 'react-navigation';

const AppContainer = createAppContainer(Navigation);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
