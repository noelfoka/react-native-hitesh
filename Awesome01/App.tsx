/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import Routes from './routes';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
}

export default App;
