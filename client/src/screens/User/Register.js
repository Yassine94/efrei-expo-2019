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
  
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontFamily: 'Porsche Next',
    fontSize: 18,
    marginBottom: 18,
  },
  input: {
    fontFamily: 'Porsche Next',
    alignSelf: 'stretch',
    height: 30,
    padding: 17,
    fontSize: 10,
    borderBottomWidth: 1,
    borderColor: '#c8cacb',
    color: '#000',

  },
  button: {
    borderRadius: 20,
    alignSelf: 'stretch',
    justifyContent: 'center',
    textAlign: 'center',
    width: 150,
    height: 0,
    padding: 12,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor: '#000',
    backgroundColor: '#d80404f0',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Porsche Next Bold',
    fontSize: 10
  },
  logo: {
    width: 300,
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center'
  }
});

const Screen = ({ navigation }) => {
  const [registerUser, { loading, error, data }] = useMutation(CREATE_USER);
  const logo = require('../../images/newlogo.png');

  const register = async ({email, password, company, city}) => {
    const { data: { createUser } } = await registerUser({ variables: { data: { email, password, company, city,  } } });

    if(createUser) {
      navigation.navigate('Login', { email, password });
    }
  }

  return(
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>
      <Text style={styles.title}>🏁 Create an account  </Text>

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

          <Separator spacing={45} />
          <View style={styles.buttonContainer}>

          <TouchableOpacity
            style={[styles.button,{

              borderLeftWidth:2,
              borderStartColor:'#000',
              borderEndColor: '#fff',
              borderTopEndRadius:0,
              borderBottomEndRadius:0
            
            }]}
          
            onPress={props.handleSubmit}
          >
          <Text style={[styles.buttonText, {  }]}>✔️ Create Porsche ID</Text>
          </TouchableOpacity>

          <Separator spacing={12} />

          <TouchableOpacity
            style={[styles.button, {
              borderRightWidth:2,
              borderLeftWidth:1,
              backgroundColor:'white',
              borderEndColor:'#000',
              borderStartColor: '#fff',
              borderTopStartRadius:0,
              borderBottomStartRadius:0,
            }
          ]}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={[styles.buttonText,{color:'black'}]}>❌ Cancel </Text>
          </TouchableOpacity>
          </View>
    
        </>
      )}
      </Formik>
    </View>
  );
}
export default Screen;
