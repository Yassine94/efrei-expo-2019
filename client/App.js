import React, { useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import * as Font from 'expo-font';

import RootNavigator from './src/navigator';

const client = new ApolloClient({
  uri: 'http://b4f89410.ngrok.io/',
});

const App = () => {
    const loadRageFont = async () => {
        await Font.loadAsync({
          'rage': require('./assets/fonts/rage.ttf'),
        });
    }


  useEffect( () => {
      loadRageFont();
  }, []);

    return (
      <ApolloProvider client={client}>
        <RootNavigator />
      </ApolloProvider>
    )
}

export default App;
