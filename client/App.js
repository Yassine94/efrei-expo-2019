import React, { useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import RootNavigator from './src/navigator';

const client = new ApolloClient({
<<<<<<< HEAD
  uri: 'http://8ffdc0c6.ngrok.io',
=======
  uri: 'http://8ffdc0c6.ngrok.io/',
>>>>>>> 940ed455928ab8fa4318bde68f9c007e6131d562
});

const App = () => {
  useEffect(async () => {
    await Font.loadAsync({
      'rage': require('./assets/fonts/rage.ttf'),
    });
  }, []);

    return (
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    )
}

export default App;
