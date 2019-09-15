import React, { useState, useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import * as Font from 'expo-font';

import RootNavigator from './src/navigator';

const client = new ApolloClient({
  uri: 'http://30afaa2f.ngrok.io',
});

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const loadRageFont = async () => {
    await Font.loadAsync({
      'rage': require('./assets/fonts/rage.ttf'),
      'Porsche Next': require('./assets/fonts/PorscheNext.ttf'),
      'Porsche Next Bold': require('./assets/fonts/PorscheNextBold.ttf'),
    });
    setIsFontLoaded(true);
  }

  useEffect( () => {
      loadRageFont();
  }, []);

  return (
    <ApolloProvider client={client}>
      { isFontLoaded && <RootNavigator /> }
    </ApolloProvider>
  );
}

export default App;
