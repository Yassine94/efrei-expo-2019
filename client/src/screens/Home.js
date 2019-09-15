import React, { useState, useEffect } from 'react';
import {useQuery} from '@apollo/react-hooks';
import * as queries from '../apollo/queries';
import { Dimensions, Text, FlatList, Image, TouchableOpacity, View, StyleSheet, ImageBackground} from 'react-native';

const S3_BUCKET_IMAGES_GENERIC_MODELS = 'https://efrei-expo-2019.s3.eu-west-3.amazonaws.com/GenericModels';
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

const Screen = ({ navigation }) => {
const {loading, error, data} = useQuery(queries.GET_GENERIC_MODELS);
  return (
    <View style={ styles.container }>
      {loading && <Text>{'Loading...'}</Text>}
      {error && <Text>{error.message}</Text>}
      {!loading && !error && (
        <>
          <FlatList
            numColumns = { 2 }
            data = { data.genericModels }
            renderItem = { ({ item: { id, model } }) => {
              return(
                <View style={ styles.tile }>
                  <ImageBackground source={{ uri: `${S3_BUCKET_IMAGES_GENERIC_MODELS}/${id}.jpg` }} style={ styles.tileImage }>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Porsches', { id, model })}
                      style={ styles.tileImage }
                      activeOpacity={0.60}>
                        <View style={ styles.tileFooter }>
                          <Text style={ styles.tileText }> { model } </Text>
                        </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </View>
              );
            }} />
        </>
      )}
    </View>
  );
}

Screen.navigationOptions = {
  title: 'Modèles',
  headerStyle: { backgroundColor: '#141518' },
  headerTitleStyle: {
    fontFamily: 'rage',
    fontSize: 32,
    color: '#eb8cb7',
    textAlign:"center",
    flex:1
  },
}
export default Screen;
