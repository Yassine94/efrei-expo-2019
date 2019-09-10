import React, { useState, useEffect } from 'react';
import {useQuery} from '@apollo/react-hooks';
import * as queries from '../apollo/queries';
<<<<<<< HEAD
import { Text, FlatList, StyleSheet, Card} from 'react-native';
import {Grid,Col} from 'native-base';
=======
import { Dimensions, Text, FlatList, Image, TouchableOpacity, View, StyleSheet, ImageBackground} from 'react-native';

const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: '#000000',
    },
    tile: {
      flex: 1,
      width: Dimensions.get('window').width/2,
      height: Dimensions.get('window').height/3,
    },
    tileImage: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
    },
    tileText: {
      fontFamily: 'rage',
      fontSize: 22,
      color: '#eb8cb7',
      textAlign: 'center',
    },
    tileFooter: {
      borderTopWidth: 0.5,
      borderColor: '#eb8cb780',
      backgroundColor: '#000000aa',
      height:'15%',
      justifyContent: 'center'
    }
  }
)
>>>>>>> 940ed455928ab8fa4318bde68f9c007e6131d562

const style = StyleSheet.create({
  row: {
      flex: 1,
      justifyContent: "space-around"
  }});
const Screen = ({ navigation }) => {
const {loading, error, data} = useQuery(queries.GET_GENERIC_MODELS);
  return (
    <View style={ styles.container }>
      {loading && <Text>{'Loading...'}</Text>}
      {error && <Text>{error.message}</Text>}
      {!loading && !error && (
<<<<<<< HEAD
      <>
      <FlatList
        numColumns = { 2 }
        data = { data.genericModels }
        renderItem = { ({ item }) => (
          <Image style={{width: Dimensions.get('window').width/2, height: Dimensions.get('window').height/3}} source={{ uri: item.imageURL }}></Image>
        )} />
    </>
=======
        <>
          <FlatList
            numColumns = { 2 }
            data = { data.genericModels }
            renderItem = { ({ item }) => (
              <View style={ styles.tile }>
                <ImageBackground source={{ uri: item.imageURL }} style={ styles.tileImage }>
                  <TouchableOpacity
                    onPress={()=>{console.log("ok")}}
                    style={ styles.tileImage }
                    activeOpacity={0.60}>
                      <View style={ styles.tileFooter }>
                        <Text style={ styles.tileText }> { item.model } </Text>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
            )} />
        </>
>>>>>>> 940ed455928ab8fa4318bde68f9c007e6131d562
      )}
    </View>
  );
}

Screen.navigationOptions = {
  title: 'PORSCHES',
  headerStyle: { backgroundColor: '#141518' },
  headerTitleStyle: { color: '#eb8cb7' },
}
export default Screen;
