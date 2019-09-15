import React from 'react';
import HomeScreen from './screens/Home';
<<<<<<< HEAD
import ProfilScreen from './screens/Profil';
=======
import ProfileScreen from './screens/Profile';
import LoginScreen from './screens/User/Login';
import RegisterScreen from './screens/User/Register';
>>>>>>> 6c26cf0cb4b2719c7fbda85a937e5a70814a7ac2
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
  LoginScreen,
  RegisterScreen,
  HomeStack
},{
  initialRouteName: 'LoginScreen',
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
<<<<<<< HEAD
  Profil: ProfilScreen,
=======
  Profile: ProfileScreen,
>>>>>>> 6c26cf0cb4b2719c7fbda85a937e5a70814a7ac2
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    style: {
      backgroundColor: '#141518'
    }
  }
});

const AppContainer = createAppContainer(LoginStack);

export default AppContainer;
