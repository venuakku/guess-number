import React from "react";
import { View,Text, StyleSheet } from "react-native";

function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: "center", margin: "auto", width: 100}}>You Won</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
