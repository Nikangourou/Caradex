import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, FlatList, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { CarCard } from "@/components/CarCard";

const DUMMY_CARS = [
  { id: "1", make: "Toyota", model: "Corolla", year: 2018, status: "Possédée" },
  { id: "2", make: "Honda", model: "Civic", year: 2015, status: "Ancienne" },
  { id: "3", make: "Ford", model: "Mustang", year: 2022, status: "Conduite" },
];

export function Stats() {
  return (
    <View>
      <ThemedView style={styles.statsContainer}>
        <View style={styles.stat}>
          <ThemedText type="subtitle">Voitures</ThemedText>
          <ThemedText type="title">3</ThemedText>
        </View>
        <View style={styles.stat}>
          <ThemedText type="subtitle">Posts</ThemedText>
          <ThemedText type="title">5</ThemedText>
        </View>
        <View style={styles.stat}>
          <ThemedText type="subtitle">Followers</ThemedText>
          <ThemedText type="title">12</ThemedText>
        </View>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  stat: {
    alignItems: "center",
  },
});
