import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';


import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import NewOrderScreen from './screens/NewOrderScreen';

export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  HomeScreen:{screen: HomeScreen},
  NewOrderScreen:{screen: NewOrderScreen}
})

const AppContainer =  createAppContainer(switchNavigator);