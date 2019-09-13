import React from 'react';
import { Text} from 'react-native';

const Screen = ({ navigation }) => {
  return (
		<View>
			<Text> Details </Text>
		</View>
	);
};

Screen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('model')
});

export default Screen;
