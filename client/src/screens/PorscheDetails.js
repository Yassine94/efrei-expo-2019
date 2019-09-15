import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Slider from '../components/slider';

const S3_BUCKET_IMAGES_PORSCHE = 'https://efrei-expo-2019.s3.eu-west-3.amazonaws.com/Porsches';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
});

const Screen = ({ navigation }) => {
  const id = navigation.getParam('id');

  return (
		<View style={styles.container}>
      <Slider
        images={[
          `${S3_BUCKET_IMAGES_PORSCHE}/${id}_0.jpg`,
          `${S3_BUCKET_IMAGES_PORSCHE}/${id}_1.jpg`
        ]}
      />

      <Text> Acheter </Text>
		</View>
	);
};

Screen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('model'),
  headerStyle: { backgroundColor: '#141518' },
  headerTitleStyle: {
    fontFamily: 'rage',
    fontSize: 32,
    color: '#eb8cb7',
    textAlign:"center",
    flex:1
  },
});

export default Screen;
