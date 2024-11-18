import React from "react";
import { Image, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { PostCard } from "@/components/PostCard";
import { Succes } from "@/components/Succes";
import { ThemedText } from "@/components/ThemedText";


const DUMMY_POSTS = [
    {
      id: "1",
      user: "Loupitos",
      content: "Balade a Paris",
      likes: 22,
      images: [require("../assets/images/posts/mini1.jpeg")],
      type: "post",
    },
    {
      id: "3",
      user: "Loupitos",
      content: "Tournage avec Arthur",
      likes: 22,
      images: [require("../assets/images/posts/arthur.jpeg")],
      type: "post",
    },
    {
      id: "4",
      user: "Loupitos",
      likes: 22,
      images: [require("../assets/images/posts/prelude1.jpeg")],
      type: "post",
    },
    {
      id: "5",
      user: "Loupitos",
      content: "Promis j'ai pas pleuré",
      likes: 8,
      images: [require("../assets/images/posts/volvo2.jpeg")],
      type: "post",
    },
    {
      id: "6",
      user: "Loupitos",
      content: "Le Mans Classic",
      likes: 22,
      images: [require("../assets/images/posts/r3.jpeg")],
      type: "post",
    },
    {
      id: "8",
      user: "Loupitos",
      content: "3 roues t'as peur",
      likes: 22,
      images: [require("../assets/images/posts/r2.jpeg")],
      type: "post",
    },
    {
      id: "9",
      user: "Loupitos",
      content: "Rallye de la mort",
      likes: 8,
      images: [require("../assets/images/posts/r1.jpeg")],
      type: "post",
    },
    {
      id: "11",
      user: "Loupitos",
      content: "Nouveau projet !",
      likes: 15,
      images: [
        require("../assets/images/posts/volvo1.jpeg"),
        require("../assets/images/posts/volvo3.jpeg"),
      ],
      type: "post",
    },
    {
      id: "12",
      user: "Loupitos",
      content: "La petite Elise",
      likes: 35,
      images: [require("../assets/images/posts/cab1.jpeg")],
      type: "post",
    },
    {
      id: "13",
      user: "Loupitos",
      likes: 35,
      images: [require("../assets/images/posts/4l1.jpeg")],
      type: "post",
    },
  ];

export function Profile() {
  return (
      <ScrollView style={styles.container}>
        <Succes />
        <ThemedText style={styles.title} type="title">Posts</ThemedText>
        <FlatList
          data={DUMMY_POSTS}
          renderItem={({ item }) => <PostCard post={item} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  title : {
    padding: 15,
  }
});
