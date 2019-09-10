import React, { useState, useEffect } from 'react';
import {useQuery} from '@apollo/react-hooks';
import * as queries from '../apollo/queries';
import { Dimensions, Text, FlatList, Image, TouchableOpacity, View, StyleSheet, ImageBackground} from 'react-native';

const styles = StyleSheet.create(
  {
    tile: {
      flex: 1,
      width: Dimensions.get('window').width/2,
      height: Dimensions.get('window').height/3,
      margin: 1
    }
  }
)

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
              <View style={styles.tile}>
                <ImageBackground source={{uri: item.imageURL}} style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}>
                  <TouchableOpacity
                    style={{width: '100%', height: '100%', justifyContent: 'flex-end'}}
                    activeOpacity={0.60}>
                      <View style={{borderTopWidth: '0.5' , borderColor: '#eb8cb780', backgroundColor: '#000000aa', height:'15%', justifyContent: 'center'}}>
                        <Text style={{fontFamily: 'rage', fontSize: '22', color: '#eb8cb7', textAlign: 'center'}}> { item.model } </Text>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
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
