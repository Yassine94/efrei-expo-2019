import React, { useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import * as Font from 'expo-font';

import RootNavigator from './src/navigator';

const client = new ApolloClient({
<<<<<<< HEAD

  uri: 'http://8ffdc0c6.ngrok.io/',

=======
  uri: 'http://50502f0c.ngrok.io',
>>>>>>> 6c26cf0cb4b2719c7fbda85a937e5a70814a7ac2
});

const App = () => {
    const loadRageFont = async () => {
        await Font.loadAsync({
          'rage': require('./assets/fonts/rage.ttf'),
          'Porsche Next': require('./assets/fonts/PorscheNext.ttf'),
          'Porsche Next Bold': require('./assets/fonts/PorscheNextBold.ttf'),
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
