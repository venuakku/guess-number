import React from "react";
import { View,Text, StyleSheet } from "react-native";

function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Text>You Won</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
