import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Tarjeta(props: any) { 
  return (
    <View style={styles.card}>
      <Text>{props.peliculas.titulo}</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.peliculas.main }} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    height: 120, 
    width: 120, 
    resizeMode: "contain", 
    borderRadius: 50 
  },
});