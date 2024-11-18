import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { PostCard, Post } from "@/components/PostCard";
import { PostSuccesCard, Succes } from "@/components/PostSuccesCard";
import { SafeAreaView } from "react-native-safe-area-context";

type Item = Post | Succes;

const DUMMY_POSTS: Item[] = [
  {
    id: "1",
    user: "Loupitos",
    content: "Balade a Paris",
    likes: 22,
    images: [require("../../assets/images/posts/mini1.jpeg")],
    type: "post",
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
    type: "post",
  },
  {
    id: "3",
    user: "Loupitos",
    content: "Tournage avec Arthur",
    likes: 22,
    images: [require("../../assets/images/posts/arthur.jpeg")],
    type: "post",
  },
  {
    id: "99",
    user: "Loupitos",
    name: "Dixieme voiture",
    points: 100,
    description: "a ajouté sa dixième voiture à son garage !",
    type: "succes",
  },
  {
    id: "4",
    user: "Loupitos",
    likes: 22,
    images: [require("../../assets/images/posts/prelude1.jpeg")],
    type: "post",
  },
  {
    id: "5",
    user: "Loupitos",
    content: "Promis j'ai pas pleuré",
    likes: 8,
    images: [require("../../assets/images/posts/volvo2.jpeg")],
    type: "post",
  },
  {
    id: "6",
    user: "Loupitos",
    content: "Le Mans Classic",
    likes: 22,
    images: [require("../../assets/images/posts/r3.jpeg")],
    type: "post",
  },
  {
    id: "7",
    user: "La buche",
    content: "L'epave",
    likes: 18,
    images: [require("../../assets/images/posts/bm1.jpeg")],
    type: "post",
  },
  {
    id: "8",
    user: "Loupitos",
    content: "3 roues t'as peur",
    likes: 22,
    images: [require("../../assets/images/posts/r2.jpeg")],
    type: "post",
  },
  {
    id: "9",
    user: "Loupitos",
    content: "Rallye de la mort",
    likes: 8,
    images: [require("../../assets/images/posts/r1.jpeg")],
    type: "post",
  },
  {
    id: "10",
    user: "La buche",
    content: "Vroum vroum dans les champs",
    likes: 18,
    images: [require("../../assets/images/posts/truck1.jpeg")],
    type: "post",
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
    type: "post",
  },
  {
    id: "12",
    user: "Loupitos",
    content: "La petite Elise",
    likes: 35,
    images: [require("../../assets/images/posts/cab1.jpeg")],
    type: "post",
  },
  {
    id: "13",
    user: "Loupitos",
    likes: 35,
    images: [require("../../assets/images/posts/4l1.jpeg")],
    type: "post",
  },
];

function isPost(item: Item): item is Post {
  return item.type === "post";
}

function isSucces(item: Item): item is Succes {
  return item.type === "succes";
}

export default function FeedScreen() {
  const renderItem = ({ item }: { item: Item }) => {
    if (isPost(item)) {
      return <PostCard post={item} />;
    } else if (isSucces(item)) {
      return <PostSuccesCard succes={item} />;
    } else {
      return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={DUMMY_POSTS}
          renderItem={renderItem}
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
    backgroundColor: "#f0f0f0",
  },
});
