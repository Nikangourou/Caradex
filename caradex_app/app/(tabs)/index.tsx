import React from "react";
import { View, FlatList, StyleSheet} from "react-native";
import { PostCard } from "@/components/PostCard";
import { SafeAreaView } from "react-native-safe-area-context";

const DUMMY_POSTS = [
  {
    id: "1",
    user: "Alice",
    content: "Je viens d'acheter une nouvelle Tesla Model 3 !",
    likes: 15,
  },
  {
    id: "2",
    user: "Bob",
    content: "Roadtrip ce weekend avec ma Mustang !",
    likes: 8,
  },
  // Ajoutez plus de posts ici
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
    backgroundColor: "#fff",
  },
});
