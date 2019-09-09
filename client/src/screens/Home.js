import React, { useState, useEffect } from 'react';
import {useQuery} from '@apollo/react-hooks';
import * as queries from '../apollo/queries';
import { Text, FlatList } from 'react-native';

const Screen = ({ navigation }) => {
const {loading, error, data} = useQuery(queries.GET_GENERIC_MODELS);
  return (
    <>
      {loading && <Text>{'Loading...'}</Text>}
      {error && <Text>{error.message}</Text>}
      {!loading && !error && (
        <>
          <FlatList
            data={data.genericModels}
            numColumns={2}
            renderItem={({item}) => (<Text>{item.model}</Text>)}
            />
        </>
      )}
    </>
  );
}
Screen.navigationOptions = {
  title: 'Accueil'
}
export default Screen;
