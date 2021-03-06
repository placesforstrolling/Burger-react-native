import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';
import Product from './screens/Product';
import Cart from './screens/Cart';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Product: {
    screen: Product,
    navigationOptions: {
      headerShown: false,
    },
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      headerShown: false,
    }
  }
})


const App = createSwitchNavigator({
  App: {
    screen: HomeStack
  }
});

export default createAppContainer(App);