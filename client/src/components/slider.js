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

  setInterval( () => {
    setIndex( (index+1) % images.length);
  }, 5000);

  return (
      <View style={styles.slider}>
        <Image style={styles.sliderImage} source={require(`../images/porsches/${images[index]}`)}></Image>
      </View>
  );
}

export default Slider;
