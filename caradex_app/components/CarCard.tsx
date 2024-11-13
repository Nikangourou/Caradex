import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export type Car = {
  make: string
  model: string
  year: number
  status: string
}

export function CarCard({ car } : { car: Car }) {
  return (
    <View style={styles.container}>
      <Text style={styles.make}>{car.make} {car.model}</Text>
      <Text style={styles.year}>{car.year}</Text>
      <Text style={styles.status}>{car.status}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  make: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  year: {
    color: '#666',
  },
  status: {
    marginTop: 5,
    fontStyle: 'italic',
  },
})