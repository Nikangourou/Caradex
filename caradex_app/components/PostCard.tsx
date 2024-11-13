import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export type Post = {
  user: string
  content: string
  likes: number
}

export function PostCard({ post } : { post: Post }) {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{post.user}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <Text style={styles.likes}>{post.likes} likes</Text>
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
  user: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    marginBottom: 10,
  },
  likes: {
    color: '#666',
  },
})