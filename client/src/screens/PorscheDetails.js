import React from 'react';
import { View, Button, StyleSheet, Dimensions } from 'react-native';
import Slider from '../components/slider';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: '#000000'
  },
  button: {
    justifyContent: 'flex-end',
    bottom: 0
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

      <Button
        style={ styles.button }
        title="Acheter"
        onPress={() => Alert.alert('Simple Button pressed')}
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
