import React from "react";
import { Image, View, Text, StyleSheet, FlatList, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Garage } from "@/components/Garage";

const DUMMY_USER = {
  name: "John Doe",
  following: 42,
  followers: 123,
};

export default function garageScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
        <Garage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  }
});
