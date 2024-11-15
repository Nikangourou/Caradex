import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { PostCard } from "@/components/PostCard";
import { SafeAreaView } from "react-native-safe-area-context";

const DUMMY_POSTS = [
  {
    id: "1",
    user: "Loupitos",
    content: "Balade a Paris",
    likes: 22,
    images: [require("../../assets/images/posts/mini1.jpeg")],
  },
  {
    id: "2",
    user: "La buche",
    content: "Vidange de boite",
    likes: 18,
    images: [
      require("../../assets/images/posts/c31.jpeg"),
      require("../../assets/images/posts/c32.jpeg"),
    ],
  },
  {
    id: "3",
    user: "Loupitos",
    content: "Tournage avec Arthur",
    likes: 22,
    images: [require("../../assets/images/posts/arthur.jpeg")],
  },
  {
    id: "4",
    user: "Loupitos",
    likes: 22,
    images: [require("../../assets/images/posts/prelude1.jpeg")],
  },
  {
    id: "5",
    user: "Loupitos",
    content: "Promis j'ai pas pleuré",
    likes: 8,
    images: [require("../../assets/images/posts/volvo2.jpeg")],
  },
  {
    id: "6",
    user: "Loupitos",
    content: "Le Mans Classic",
    likes: 22,
    images: [require("../../assets/images/posts/r3.jpeg")],
  },
  {
    id: "7",
    user: "La buche",
    content: "L'epave",
    likes: 18,
    images: [require("../../assets/images/posts/bm1.jpeg")],
  },
  {
    id: "8",
    user: "Loupitos",
    content: "3 roues t'as peur",
    likes: 22,
    images: [require("../../assets/images/posts/r2.jpeg")],
  },
  {
    id: "9",
    user: "Loupitos",
    content: "Rallye de la mort",
    likes: 8,
    images: [require("../../assets/images/posts/r1.jpeg")],
  },
  {
    id: "10",
    user: "La buche",
    content: "Vroum vroum dans les champs",
    likes: 18,
    images: [require("../../assets/images/posts/truck1.jpeg")],
  },
  {
    id: "11",
    user: "Loupitos",
    content: "Nouveau projet !",
    likes: 15,
    images: [
      require("../../assets/images/posts/volvo1.jpeg"),
      require("../../assets/images/posts/volvo3.jpeg"),
    ],
  },
  {
    id: "12",
    user: "Loupitos",
    content: "La petite Elise",
    likes: 35,
    images: [require("../../assets/images/posts/cab1.jpeg")],
  },
  {
    id: "13",
    user: "Loupitos",
    likes: 35,
    images: [require("../../assets/images/posts/4l1.jpeg")],
  },
];

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={DUMMY_POSTS}
          renderItem={({ item }) => <PostCard post={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});