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
    fontSize: 45,
    marginBottom: 18,
  },
  input: {
    fontFamily: 'Porsche Next',
    alignSelf: 'stretch',
    height: 50,
    padding: 17,
    fontSize: 30,
    borderBottomWidth: 1,
    borderColor: '#c8cacb',
    color: '#000',

  },
  button: {
    borderRadius: 20,
    alignSelf: 'stretch',
    width: '40%',
    padding: 12
  },
  buttonText: {
    fontFamily: 'Porsche Next Bold',
    fontSize: 18
  },
  logo: {
    width: 800,
    height: 400,
    marginBottom: 20,
    alignSelf: 'center'
  }
});

const Screen = ({ navigation }) => {
  const [registerUser, { loading, error, data }] = useMutation(CREATE_USER);
  const logo = require('../../images/newlogo.png');

  const register = async ({email, password, company, city}) => {
    const { data: { createUser } } = await registerUser({ variables: { data: { email, password, company, city, country } } });

    if(createUser) {
      navigation.navigate('Login', { email, password });
    }
  }

  return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.title}>Create an account 🏁 </Text>

      <Formik
        initialValues={{
          email: '',
          password: '',
          company: '',
          city: ''
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
            placeholder='Porsche ID (Email)'
            value={props.values.email}
            onChangeText={v => props.setFieldValue('email', v)}
            />

          <Separator spacing={12}/>

          <TextInput
            style={styles.input}
            textContentType='password'
            placeholder='Password'
            secureTextEntry={true}
            value={props.values.password}
            onChangeText={v => props.setFieldValue('password', v)}
            />

          <Separator spacing={12}/>

          <TextInput
            style={styles.input}
            textContentType='organizationName'
            placeholder='Dealer'
            value={props.values.company}
            onChangeText={v => props.setFieldValue('company', v)}
            />

          <Separator spacing={12}/>

          <TextInput
            style={styles.input}
            textContentType='addressCity'
            placeholder='Adress'
            value={props.values.city}
            onChangeText={v => props.setFieldValue('city', v)}
            />

          <Separator spacing={12}/>

          <TextInput
            style={styles.input}
            textContentType='country'
            placeholder='Country'
            value={props.values.country}
            onChangeText={v => props.setFieldValue('country', v)}
            />

          <Separator spacing={45} />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#d4001d', borderWidth: 1,borderColor:'#585858e0'}]}
            onPress={props.handleSubmit}
          >
            <Text style={[styles.buttonText, { color: '#fff' }]}>✔️ Create Porsche ID</Text>
          </TouchableOpacity>

          <Separator spacing={12} />

          <TouchableOpacity
            style={[styles.button, {borderWidth: 1,borderColor:'#585858e0' }]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>❌ Cancel </Text>
          </TouchableOpacity>
        </>
      )}
      </Formik>
    </View>
  );
}
export default Screen;
