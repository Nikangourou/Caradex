import React from "react";
import { Image, View, Text, StyleSheet, FlatList, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DUMMY_USER = {
  name: "John Doe",
  following: 42,
  followers: 123,
};

export default function Record() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{DUMMY_USER.name}</Text>
          <View style={styles.followersContainer}>
            <Text>{DUMMY_USER.following} following</Text>
            <Text>{DUMMY_USER.followers} followers</Text>
          </View>
        </View>
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
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  followersContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
