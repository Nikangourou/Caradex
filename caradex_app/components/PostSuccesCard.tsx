import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export type Succes = {
  id: string;
  user: string;
  name: string;
  description: string;
  points: number;
  type: string;
};

export function PostSuccesCard({ succes }: { succes: Succes }) {
  return (
    <View style={styles.container}>
      <Ionicons name="trophy" size={24} color="black" />
      <View style={styles.textContainer}>
        <ThemedText style={styles.name}>{succes.name}</ThemedText>
        <ThemedText type="little" style={styles.description}>
          {succes.user + " "}
          {succes.description}
        </ThemedText>
        <ThemedText style={styles.points}>{succes.points} points</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 130,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
  points: {
    marginTop: 5,
    fontSize: 10,
    color: "#666",
  },
});
