import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import Separator  from '../../components/shared/Separator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    margin: 15
  },
  profilPic: {
    width: 150,
    height: 150,
    borderRadius: 150/2,
    borderWidth: 1.5,
    borderColor: '#eaeaea',
    alignSelf: 'center'
  },
  input: {
    fontFamily: 'Porsche Next',
    alignSelf: 'stretch',
    height: 50,
    padding: 17,
    borderWidth: 1,
    borderColor: '#c8cacb',
    color: '#000'
  }
});

const Screen = ({ navigation }) => {
  const cameraRef = useRef(null);
  const [cameraPermissionStatus, setCameraPermissionStatus] = useState(null);
  const [photo, setPhoto] = useState(null);

  const askPermission = async () => {
		const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
		setCameraPermissionStatus(status);
	}

  const takePicture = async () => {
    if(cameraPermissionStatus !== 'granted') {
      await askPermission();
    }

    if (cameraRef && cameraRef.current && cameraPermissionStatus === 'granted') {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);
    }
  }

  useEffect(() => {
    Permissions.getAsync(Permissions.CAMERA).then(({ status, expires, permissions }) => {
			console.log(status);
      setCameraPermissionStatus(status)
		});

    console.log(cameraPermissionStatus);
  }, []);

  return(
    <View style={styles.container}>
      {cameraPermissionStatus === 'granted' && (
        <Camera ref={cameraRef} style={{ flex: 1 }} type={Camera.Constants.Type.back}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => takePicture()}
            >
            <Image
              style={styles.profilPic}
              source={{ uri: 'https://efrei-expo-2019.s3.eu-west-3.amazonaws.com/Profiles/Pictures/5735b600-d6a0-11e9-a1bb-61fb62e3c3a1.jpg' }}
            />
          </TouchableOpacity>
        </Camera>
      )}

      <Image
        style={styles.profilPic}
        source={{ uri: 'https://efrei-expo-2019.s3.eu-west-3.amazonaws.com/Profiles/Pictures/5735b600-d6a0-11e9-a1bb-61fb62e3c3a1.jpg' }}
      />

      <Separator spacing={25}/>

      <TextInput
        style={styles.input}
        textContentType='emailAddress'
        />

      <TextInput
        style={styles.input}
        textContentType='organizationName'
        />

        <TextInput
        style={styles.input}
        textContentType='addressCity'
        />

        <Text>{photo}</Text>
    </View>
  );
}

Screen.navigationOptions = ({ navigation }) => ({
  title: "Profile",
});

export default Screen;
