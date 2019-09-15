import React from 'react';
import HomeScreen from './screens/Home';
import ProfileScreen from './screens/User/Profile';
import LoginScreen from './screens/User/Login';
import RegisterScreen from './screens/User/Register';
import PorschesScreen from './screens/Porsche/Porsches';
import PorscheDetailsScreen from './screens/Porsche/PorscheDetails';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

const UserStack = createStackNavigator({
  Profile: ProfileScreen
}, {
  initialRouteName: 'Profile',
  defaultNavigationOptions: {
    header: null
  }
});

const PorscheStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Porsches: { screen: PorschesScreen },
  PorscheDetails: { screen: PorscheDetailsScreen }
}, {
  initialRouteName: 'Home'
});

const HomeNav = createBottomTabNavigator({
  PorscheStack: {
    screen: PorscheStack,
    navigationOptions: {
      title: 'Porsche',
      tabBarIcon: () => {
        return <Ionicons name='ios-car' size={28} color={'#eb8cb7'}/>
      },
    }
  },
  UserStack: {
    screen: UserStack,
    navigationOptions: {
      title: 'User',
      tabBarIcon: () => {
        return <Ionicons name='ios-person' size={28} color={'#eb8cb7'}/>
      },
    }
  }
}, {
  initialRouteName: 'UserStack',
  tabBarOptions: {
    activeTintColor: '#f584b8',
    inactiveTintColor: '#ffffff',
    style: {
      backgroundColor: '#141518',
    }
  }
});

const LoginStack = createSwitchNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
  Home: HomeNav
},{
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(LoginStack);

export default AppContainer;
