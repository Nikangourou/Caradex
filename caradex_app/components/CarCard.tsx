import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

export type Car = {
  make: string
  model: string
  year: number
  status: string
  url: any;
}

export function CarCard({ car } : { car: Car }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={car.url} style={styles.image} >
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.make}>{car.make} {car.model}</Text>
          <Text style={styles.year}>{car.year}</Text>
          <Text style={styles.status}>{car.status}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    marginVertical: 8,
    borderRadius: 8,
    overflow: 'hidden', // Ensures the rounded corners clip the background image
  },
  image: {
    width: '100%',
    height: 180, // Set a fixed height for the card
    justifyContent: 'flex-end',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the overlay color and opacity as needed
  },
  textContainer: {
    padding: 15,
  },
  make: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff', // White text to contrast with the overlay
  },
  year: {
    color: '#cccccc',
  },
  status: {
    marginTop: 5,
    fontStyle: 'italic',
    color: '#cccccc',
  },
})