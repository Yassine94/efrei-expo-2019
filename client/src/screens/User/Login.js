import React from 'react';
import { Formik } from 'formik';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Separator  from '../../components/shared/Separator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    fontFamily: 'Porsche Next',
    fontSize: '1.625rem',
    marginBottom: '1.125rem'
  },
  input: {
    fontFamily: 'Porsche Next',
    alignSelf: 'stretch',
    height: '3.125rem',
    padding: '1.0625rem',
    borderWidth: 1,
    borderColor: '#c8cacb',
    color: '#000'
  },
  button: {
    alignSelf: 'stretch',
    marginTop: '1.5rem',
    padding: '0.75rem',
    backgroundColor: '#d5001c'
  },
  buttonText: {
    fontFamily: 'Porsche Next Bold',
    fontSize: '1.15rem',
    color: '#fff'
  }
});

const Screen = ({ navigation }) => {

  return(
    <View style={styles.container}>
      <Text style={styles.title}> Bienvenue sur RN Porsche </Text>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
      >
      <View>
        <TextInput
          style={styles.input}
          textContentType='emailAddress'
          placeholder='Porsche ID (adresse e-mail)'
          />

        <Separator spacing='0.75rem' />

        <TextInput
          style={styles.input}
          textContentType='password'
          secureTextEntry={true}
          />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> >  Se Connecter </Text>
        </TouchableOpacity>
      </View>
      </Formik>
    </View>
  );
}
export default Screen;
