import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { Garage } from "@/components/Garage";
import { Profile } from "@/components/Profile";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/ThemedText";

const DUMMY_USER = {
  name: "Loupitos",
  following: 42,
  followers: 123,
  xp: 2242,
};

export default function User() {
  const [showGarage, setShowGarage] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.container}>
            <View style={styles.header}>
              <ThemedText type="title" style={styles.name}>
                {DUMMY_USER.name}
              </ThemedText>
              <View style={styles.followersContainer}>
                <ThemedText>{DUMMY_USER.xp} xp</ThemedText>
                <ThemedText>{DUMMY_USER.following} following</ThemedText>
                <ThemedText>{DUMMY_USER.followers} followers</ThemedText>
              </View>
            </View>
            <View style={styles.containerButtons}>
              <TouchableOpacity
                style={[styles.button, showGarage && styles.selectedButton]}
                onPress={() => setShowGarage(true)}
              >
                <ThemedText type="button">Garage</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, !showGarage && styles.selectedButton]}
                onPress={() => setShowGarage(false)}
              >
                <ThemedText type="button">Profil</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        )}
        data={showGarage ? [{}] : [{}]}
        renderItem={() => (showGarage ? <Garage /> : <Profile />)}
        keyExtractor={(_, index) => index.toString()}
      />
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
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedButton: {
    borderBottomWidth: 2,
    borderBottomColor: "#007bff",
  },
});
