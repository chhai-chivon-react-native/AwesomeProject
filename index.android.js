/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

// Redux
import { Provider } from 'react-redux'
import store from './app/components/store'
// Navigation
import TabBarNavigation from './app/components/tabBar/views/TabBarNavigation'

import App  from './app/containers/test';
export default class AwesomeProject extends Component {
  render() {
    return (
        <View>
            {/*<Provider store={store}>
              <TabBarNavigation />
            </Provider>*/}
            <Text>Hello World</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
