import React, { useState, useEffect } from 'react';
import {useQuery} from '@apollo/react-hooks';
import * as queries from '../apollo/queries';
import { Text, FlatList, StyleSheet, Card} from 'react-native';
import {Grid,Col} from 'native-base';

const style = StyleSheet.create({
  row: {
      flex: 1,
      justifyContent: "space-around"
  }});
const Screen = ({ navigation }) => {
const {loading, error, data} = useQuery(queries.GET_GENERIC_MODELS);
  return (
    <>
      {loading && <Text>{'Loading...'}</Text>}
      {error && <Text>{error.message}</Text>}
      {!loading && !error && (
      <>
      <FlatList
        numColumns = { 2 }
        data = { data.genericModels }
        renderItem = { ({ item }) => (
          <Image style={{width: Dimensions.get('window').width/2, height: Dimensions.get('window').height/3}} source={{ uri: item.imageURL }}></Image>
        )} />
    </>
      )}
    </>
  );
}
Screen.navigationOptions = {
  title: 'Accueil'
}
export default Screen;
