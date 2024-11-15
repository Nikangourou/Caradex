import { StyleSheet, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { CarCard } from "@/components/CarCard";
import { Stats } from "@/components/Stats";

export type Car = {
  id: string;
  make: string;
  model: string;
  year: number;
  status: string;
  url: string;
};

const DUMMY_CARS: Car[] = [
  {
    id: "1",
    make: "Volvo",
    model: "850",
    year: 1991,
    status: "Possédée",
    url: require("../assets/images/voitures/volvo.jpeg"),
  },
  {
    id: "2",
    make: "Mini",
    model: "Cooper",
    year: 1988,
    status: "Posséde",
    url: require("../assets/images/voitures/miniV.jpeg"),
  },
  {
    id: "3",
    make: "Renault",
    model: "4l",
    year: 1985,
    status: "Possédée",
    url: require("../assets/images/voitures/4l1.jpeg"),
  },
  {
    id: "4",
    make: "Citroen",
    model: "Xantia",
    year: 1998,
    status: "Conduite",
    url: require("../assets/images/voitures/xantia.jpeg"),
  },
  {
    id: "5",
    make: "Honda",
    model: "Prelude",
    year: 1992,
    status: "Possédée",
    url: require("../assets/images/voitures/prelude.jpeg"),
  },
  {
    id: "6",
    make: "BMW",
    model: "e30",
    year: 1985,
    status: "Conduite",
    url: require("../assets/images/voitures/bmE30.jpeg"),
  },
  {
    id: "7",
    make: "Wolkswagen",
    model: "Up",
    year: 2008,
    status: "Possédée",
    url: require("../assets/images/voitures/up.png"),
  },
  {
    id: "8",
    make: "Chevrolet",
    model: "Corvette C3",
    year: 1995,
    status: "Vue",
    url: require("../assets/images/voitures/corvetteC3.jpeg"),
  },
  {
    id: "9",
    make: "Renault",
    model: "Megane",
    year: 1999,
    status: "Conduite",
    url: require("../assets/images/voitures/megane.jpeg"),
  },
];

export function Garage() {
  // Fonction de comparaison pour trier les voitures
  const sortCarsByStatus = (a: Car, b: Car) => {
    const statusPriority: { [key: string]: number } = {
      Posséde: 1,
      Possédée: 2,
      Conduite: 3,
      Vue: 4,
    };

    return statusPriority[a.status] - statusPriority[b.status];
  };

  // Trier les voitures en utilisant la fonction de comparaison
  const sortedCars = [...DUMMY_CARS].sort(sortCarsByStatus);

  return (
    <View style={styles.container}>
      <FlatGrid
        itemDimension={130}
        data={sortedCars}
        renderItem={({ item }) => <CarCard car={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff", 
    padding: 10,
  },
});
