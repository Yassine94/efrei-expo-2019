import React, { useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import RootNavigator from './src/navigator';

const client = new ApolloClient({
  uri: 'http://8ffdc0c6.ngrok.io/',
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
