/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Swiper showsButtons={true}>
        <View>
          <Text>{"\nThis is page 1"}</Text>
        </View>
        <View>
          <Text>{"\nThis is page 2"}</Text>
        </View>
      </Swiper>)
  }
}



AppRegistry.registerComponent('SwiperTester', () => App);
