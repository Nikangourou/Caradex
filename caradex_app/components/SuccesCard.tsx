import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, FlatList, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";

export type Succes = {
  id: string;
  name: string;
  description: string;
  points: number;
};

export function SuccesCard({ succes }: { succes: Succes }) {
  return (
    <View style={styles.container}>
      <Ionicons name="trophy" size={24} color="black" />
      <View>
        <ThemedText style={styles.name}>{succes.name}</ThemedText>
        <ThemedText type="little" style={styles.description}>{succes.description}</ThemedText>
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
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
});
