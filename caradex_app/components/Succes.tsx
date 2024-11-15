import { StyleSheet, View, Button } from "react-native";
import { SuccesCard } from "@/components/SuccesCard";
import { ThemedText } from "@/components/ThemedText";
import { FlatGrid } from "react-native-super-grid";
import { useState } from "react";

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

export function Succes() {
  const [showSucces, setShowSucces] = useState(false);

  return (
    <View style={[styles.container, { height: showSucces ? "auto" : 180 }]} >
      <View style={styles.headder}>
        <ThemedText type="title">Succès</ThemedText>
        <Button
          title={showSucces ? "Afficher moins" : "Afficher tout"}
          onPress={() => setShowSucces(!showSucces)}
        />
      </View>
      <FlatGrid
        data={DUMMY_SUCCES}
        renderItem={({ item }) => <SuccesCard succes={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    // backgroundColor: "red",
  },
  headder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
});
