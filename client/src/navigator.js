import React from 'react';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import PorschesScreen from './screens/Porsches';
import PorscheDetailsScreen from './screens/PorscheDetails';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Porsches: {
    screen: PorschesScreen,
  },
  PorscheDetails: {
    screen: PorscheDetailsScreen,
  }
}, {
  initialRouteName: 'Home',
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Profile: ProfileScreen,
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    style: {
      backgroundColor: '#141518'
    }
  }
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
