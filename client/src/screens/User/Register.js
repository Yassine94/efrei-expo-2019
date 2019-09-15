import React from 'react';
import { Formik } from 'formik';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Separator  from '../../components/shared/Separator';
import { CREATE_USER } from '../../apollo/mutations';
import { useMutation } from '@apollo/react-hooks';

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
    fontSize: 26,
    marginBottom: 18,
  },
  input: {
    fontFamily: 'Porsche Next',
    alignSelf: 'stretch',
    height: 50,
    padding: 17,
    borderWidth: 1,
    borderColor: '#c8cacb',
    color: '#000'
  },
  button: {
    alignSelf: 'stretch',
    padding: 12
  },
  buttonText: {
    fontFamily: 'Porsche Next Bold',
    fontSize: 18
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: 'center'
  }
});

const Screen = ({ navigation }) => {
  const [registerUser, { loading, error, data }] = useMutation(CREATE_USER);
  const logo = require('../../images/logo.png');

  const register = async ({email, password, company, city}) => {
    const { data: { createUser } } = await registerUser({ variables: { data: { email, password, company, city } } });

    if(createUser) {
      navigation.navigate('Login', { email, password });
    }
  }

  return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.title}> Créer un Porsche ID Account </Text>

      <Formik
        initialValues={{
          email: 'a',
          password: 'a',
          company: 'a',
          city: 'a'
        }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => register(values)}
      >
      { props => (
        <>
          <TextInput
            style={styles.input}
            textContentType='emailAddress'
            placeholder='Porsche ID (adresse e-mail)'
            value={props.values.email}
            onChangeText={v => props.setFieldValue('email', v)}
            />

          <Separator spacing={12}/>

          <TextInput
            style={styles.input}
            textContentType='password'
            placeholder='Mot de passe'
            secureTextEntry={true}
            value={props.values.password}
            onChangeText={v => props.setFieldValue('password', v)}
            />

          <Separator spacing={12}/>

          <TextInput
            style={styles.input}
            textContentType='organizationName'
            placeholder='Nom de la société'
            value={props.values.company}
            onChangeText={v => props.setFieldValue('company', v)}
            />

          <Separator spacing={12}/>

          <TextInput
            style={styles.input}
            textContentType='addressCity'
            placeholder='Ville'
            value={props.values.city}
            onChangeText={v => props.setFieldValue('city', v)}
            />

          <Separator spacing={45} />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#d5001c' }]}
            onPress={props.handleSubmit}
          >
            <Text style={[styles.buttonText, { color: '#fff' }]}> >  Créer un compte Porsche ID </Text>
          </TouchableOpacity>

          <Separator spacing={12} />

          <TouchableOpacity
            style={[styles.button, { borderWidth: 1, borderColor: '#767676' }]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}> X  Annuler </Text>
          </TouchableOpacity>
        </>
      )}
      </Formik>
    </View>
  );
}
export default Screen;
