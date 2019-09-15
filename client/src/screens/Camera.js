import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Amplify, { Storage } from 'aws-amplify';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

Amplify.configure({"aws_project_region": "eu-west-2"});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  button: {
    fontFamily: 'Porsche Next',
    fontSize: 18,
    margin: 5,
    color: '#ffffff',
    backgroundColor: '#ff0000'
  }
});

const Screen = ({ navigation }) => {
  const cameraRef = useRef(null);
  const [permissionStatus, setPermissionStatus] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect( () => {
    Permissions.getAsync(Permissions.CAMERA).then(({ status, expires, permissions }) => {
      setPermissionStatus(status);
		});
  }, []);

  const askPermission = async () => {
		const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
		setPermissionStatus(status);
	}

  const takePicture = async () => {
    if(permissionStatus !== 'granted') {
      await askPermission();
    }

    if (cameraRef && cameraRef.current && permissionStatus === 'granted') {
      const photo = await cameraRef.current.takePictureAsync({ base64: true });
      const result = await uploadPicture(photo);
    }
  }

  const uploadPicture = async (picture) => {
    const file = {
      uri: picture.uri,
      type: 'image/jpeg'
    };

    const access = { level: 'public' };
    Storage.put("test.txt", "ok", access);
  }

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={{flex: 1}} type={Camera.Constants.Type.back}>
      </Camera>
      <TouchableOpacity
        onPress={() => takePicture()}
      >
        <Text style={styles.button}> Capture </Text>
      </TouchableOpacity>
    </View>
  );
}

Screen.navigationOptions = {
  title: 'Camera'
}

export default Screen;
