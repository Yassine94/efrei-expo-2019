import React from 'react';
import * as queries from '../../apollo/queries';
import { useQuery } from '@apollo/react-hooks';
import { Dimensions, Text, FlatList, StyleSheet, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
	},
	row: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	}
});

const Screen = ({ navigation }) => {
	const genericModelId = navigation.getParam('id');
	const { loading, error, data } = useQuery(queries.SEARCH_PORSCHES, {
		variables: {
			"GenericModelId": genericModelId
		}
	});

  return (
		<View style={ styles.container }>
			{loading && <Text>{'Loading...'}</Text>}
			{error && <Text>{error.message}</Text>}
			{!loading && !error && (
				<>
					<FlatList
						data = { data.searchPorsches }
            keyExtractor = { item => item.id }
						renderItem = { ({ item: { id, model, imageURL }  }) => (
							<TouchableOpacity
								onPress={() => navigation.navigate('PorscheDetails', { id, model })}
								activeOpacity={0.60}>
								<View>
									<Image source={{ uri: imageURL }} style={{ width: 170, height: 100 }}></Image>
									<Text>{ model }</Text>
								</View>
							</TouchableOpacity>
						)}
						/>
				</>
			)}
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
