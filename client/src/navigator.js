import React from 'react';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';
import LoginScreen from './screens/User/Login';
import RegisterScreen from './screens/User/Register';
import PorschesScreen from './screens/Porsches';
import PorscheDetailsScreen from './screens/PorscheDetails';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
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

const LoginStack = createSwitchNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Home: HomeStack
},{
  initialRouteName: 'Register',
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

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;
