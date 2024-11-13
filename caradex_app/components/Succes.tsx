import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, FlatList, View, Dimensions, Text } from "react-native";
import { SuccesCard } from "@/components/SuccesCard";
import { ThemedText } from "@/components/ThemedText";

const DUMMY_SUCCES = [
  {
    id: "1",
    name: "Premier post",
    description: "Vous avez publié votre premier post !",
    points: 10,
  },
  {
    id: "2",
    name: "Premiere voiture",
    description: "Vous avez ajouté votre première voiture à votre garage !",
    points: 10,
  },
  {
    id: "3",
    name: "Dixieme voiture",
    description: "Vous avez ajouté votre dixième voiture à votre garage !",
    points: 10,
  },
  {
    id: "4",
    name: "Premier follower",
    description: "Vous avez obtenu votre premier follower !",
    points: 10,
  },
  {
    id: "3",
    name: "Dixieme voiture",
    description: "Vous avez ajouté votre dixième voiture à votre garage !",
    points: 10,
  },
  {
    id: "4",
    name: "Premier follower",
    description: "Vous avez obtenu votre premier follower !",
    points: 10,
  },
];

const numColumns = 3;
const WIDTH = Dimensions.get("window").width;

export type Succes = {
  id: string;
  name: string;
  description: string;
  points: number;
};

const GridItem = ({ item }: { item: Succes }) => (
  <View style={[styles.item, { width: WIDTH / numColumns }]}>
    <SuccesCard succes={item} />
  </View>
);

export function Succes() {
  return (
    <View style={styles.container}>
      <View style={styles.headder}>
        <ThemedText type="title">Succès</ThemedText>
        <ThemedText>Afficher tous les succès</ThemedText>
      </View>
      <FlatList
        data={DUMMY_SUCCES}
        renderItem={({ item }) => <GridItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        scrollEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 180,

  },
  headder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    height: 140,
  },
});
