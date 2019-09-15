import React, { useState, useEffect } from 'react';
import {useQuery} from '@apollo/react-hooks';
import * as queries from '../apollo/queries';
import {Grid,Col} from 'native-base';
import t from 'tcomb-form-native'; // 0.6.9
import {Text, Image, TouchableOpacity, View, StyleSheet, ImageBackground} from 'react-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});


const Screen = ({ navigation }) => {

  return (
    <View style={styles.container}>
    <Form type={User} /> {/* Notice the addition of the Form component */}
  </View>
  );
};







Screen.navigationOptions = {
  title: 'Profil',
  headerStyle: { backgroundColor: '#141518' },
  headerTitleStyle: { color: '#eb8cb7' },
}
export default Screen;
