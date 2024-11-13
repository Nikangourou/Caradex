import React from "react";
import { Image, View, Text, StyleSheet, FlatList } from "react-native";
import { PostCard } from "@/components/PostCard";
import { Succes } from "@/components/Succes";
import { Score } from "@/components/Score";
import { ThemedText } from "@/components/ThemedText";

const DUMMY_USER = {
  name: "John Doe",
  posts: [
    { id: "1", content: "Je viens de faire une vidange sur ma BMW", likes: 5, user : "John Doe" },
    { id: "2", content: "Qui veut faire un rallye ce weekend ?", likes: 12, user : "John Doe" },
  ],
};

export function Profile() {
  return (
      <View style={styles.container}>
        <Score />
        <Succes />
        <ThemedText type="title">Posts</ThemedText>
        <FlatList
          data={DUMMY_USER.posts}
          renderItem={({ item }) => <PostCard post={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
