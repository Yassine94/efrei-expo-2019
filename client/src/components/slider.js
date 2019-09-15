import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  slider: {
    width: Dimensions.get('window').width
  },

  sliderImage: {
    width: Dimensions.get('window').width,
    height: 250
  }
});

const Slider = ({ images: imagesToDisplay }) => {
  const [images, setImages] = useState(imagesToDisplay);
  const [index, setIndex] = useState(0);

  const refreshIntervalId = setInterval( () => {
    setIndex( (index+1) % images.length);
  }, 5000);

  useEffect( () => {
    return function cleanup() {
      clearInterval(refreshIntervalId);
    }
  }, [])

  return (
      <View style={styles.slider}>
        <Image style={styles.sliderImage} source={{ uri: images[index] }}></Image>
      </View>
  );
}

export default Slider;
