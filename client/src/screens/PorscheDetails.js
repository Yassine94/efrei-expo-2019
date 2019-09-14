import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Slider from '../components/slider';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000'
  }
});

const Screen = ({ navigation }) => {
  const id = navigation.getParam('id');

  return (
		<View style={styles.container}>
      <Slider
        images={[
          `${id}_0.jpg`,
          `${id}_1.jpg`
        ]}
      />


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
