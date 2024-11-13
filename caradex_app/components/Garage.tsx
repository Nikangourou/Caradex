import { StyleSheet, FlatList, View, Dimensions } from "react-native";
import { CarCard } from "@/components/CarCard";
import { Stats } from "@/components/Stats";

const DUMMY_CARS = [
  { id: "1", make: "Toyota", model: "Corolla", year: 2018, status: "Possédée" },
  { id: "2", make: "Honda", model: "Civic", year: 2015, status: "Ancienne" },
  { id: "3", make: "Ford", model: "Mustang", year: 2022, status: "Conduite" },
];

const numColumns = 2;
const WIDTH = Dimensions.get("window").width;

export type Car = {
  make: string;
  model: string;
  year: number;
  status: string;
};

const GridItem = ({ item }: { item: Car }) => (
  <View style={[styles.item, { width: WIDTH / numColumns }]}>
    <CarCard car={item} />
  </View>
);

export function Garage() {
  return (
    <View style={styles.container}>
      <Stats />
      <FlatList
        data={DUMMY_CARS}
        renderItem={({ item }) => <GridItem item={item} />}
        keyExtractor={(item) => item.id}
        numColumns={numColumns} // Spécifiez le nombre de colonnes
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Assurez-vous que le conteneur prend toute la hauteur disponible
    backgroundColor: "#fff", // Ajustez si nécessaire
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5, // Espace entre les éléments
    height: WIDTH / numColumns, // Maintenir un ratio 1:1 pour chaque élément
    backgroundColor: 'red', // Juste pour visualiser les items, ajustez en conséquence
  },
});