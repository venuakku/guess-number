import { SafeAreaView, StyleSheet, View } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);

  let screen = (
    <GameStartScreen pickedNumber={(number) => setUserNumber(number)} />
  );

  if (userNumber) {
    screen = <GameScreen gameOver={gameStateHandler} userNumber={userNumber} />;
  }

  if(gameOver) {
    screen = <GameOverScreen />
  }

  function gameStateHandler(res) {
    setGameOver(true);
  }

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appContainer}>{screen}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#131723",
  },
});
