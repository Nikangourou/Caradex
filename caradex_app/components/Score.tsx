import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, FlatList, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export function Score() {
  return (
    <View style={styles.container}>
      <View style={styles.headder}>
        <ThemedText type="title">Scores</ThemedText>
        <ThemedText type="subtitle">100 points</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
  },
  headder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
