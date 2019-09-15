import React from 'react';
import { Formik } from 'formik';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Separator  from '../../components/shared/Separator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15
  }
});

const Screen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text> Register </Text>

      <Formik
        initialValues={{
          email: '',
          password: '',
          company: '',
          city: ''
        }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => console.log(values)}
      >
      { props => (
        <>
          <TextInput
            textContentType='emailAddress'
            placeholder='Porsche ID (adresse e-mail)'
            value={props.values.email}
            onChangeText={v => props.setFieldValue('email', v)}
            />

          <TextInput
            textContentType='password'
            placeholder='Mot de passe'
            secureTextEntry={true}
            value={props.values.password}
            onChangeText={v => props.setFieldValue('password', v)}
            />

          <TextInput
            textContentType='organizationName'
            placeholder='Nom de la société'
            value={props.values.company}
            onChangeText={v => props.setFieldValue('company', v)}
            />

          <TextInput
            textContentType='addressCity'
            placeholder='Ville'
            value={props.values.company}
            onChangeText={v => props.setFieldValue('city', v)}
            />

        </>
      )}
      </Formik>
    </View>
  );
}
export default Screen;
