import React from 'react';
import { Text } from 'react-native';

const Screen = ({ navigation }) => {
	const genericModelId = navigation.getParam('id');

  return (
    <Text>{ genericModelId }</Text>
  );
};

Screen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('model')
});

export default Screen;
