import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText } from "@/components/ThemedText";


export type Post = {
  user: string;
  content?: string;
  likes: number;
  images: any[];
}

export function PostCard({ post }: { post: Post }) {
  const { width } = Dimensions.get('window');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = (event: any) => {
    const x = event.nativeEvent.contentOffset.x;
    setCurrentImageIndex(Math.round(x / (width - 30)));
  }

  return (
    <View style={styles.container}>
      <ThemedText style={styles.user}>{post.user}</ThemedText>
      {post.content && <ThemedText style={styles.content}>{post.content}</ThemedText>}
      <FlatList
        data={post.images}
        horizontal
        renderItem={({ item }) => (
          <Image source={item} style={[styles.image, { width: width, height: width - 30 }]} />
        )}
        keyExtractor={(item, index) => index.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      {post.images.length > 1 && (
        <View style={styles.paginationContainer}>
          {post.images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                currentImageIndex === index ? styles.activeDot : {},
              ]}
            />
          ))}
        </View>
      )}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={24} color="#000" />
        </TouchableOpacity>
        <ThemedText style={styles.likes}>{post.likes}</ThemedText>
        <TouchableOpacity style={styles.commentIcon}>
          <Ionicons name="chatbubble-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  user: {
    paddingHorizontal: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  likes: {
    color: '#666',
    marginLeft: 5,
  },
  image: {
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 15,
  },
  commentIcon: {
    marginLeft: 15,
  }
});

export default PostCard;