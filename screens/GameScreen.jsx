import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function GameScreen({ userNumber, gameOver }) {
  const [guess, setGuess] = useState(12);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(99);

  useEffect(() => {
    const res = guessNumber(min, max, userNumber);
    setGuess(res);
  }, []);

  function lowerButtonHandler() {
    if (guess > userNumber) {
      Alert.alert("Don't Lie!", "Give correct hint", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }
    const res = guessNumber(guess, max, userNumber);

    if (res == userNumber) {
      Alert.alert("Correct!", `The number was ${userNumber}`, [
        { text: "Okay", style: "destructive", onPress: gameOver },
      ]);
      return;
    }
    setGuess(res);
    setMin(guess + 1);
  }

  function higherButtonHandler() {
    if (guess < userNumber) {
      Alert.alert("Don't Lie!", "Give correct hint", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }
    const res = guessNumber(min, guess, userNumber);

    if (res == userNumber) {
      Alert.alert("Correct!", `The number was ${userNumber}`, [
        { text: "Okay", style: "destructive", onPress: gameOver },
      ]);
      return;
    }
    setGuess(res);
    setMax(guess - 1);
  }

  function guessNumber(min, max) {
    return (randomNumber = Math.floor(Math.random() * (max - min)) + min);
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.upperText}>Computer's Guess: {guess}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={lowerButtonHandler}>Lower</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={higherButtonHandler}>Higher</PrimaryButton>
        </View>
      </View>
      <View>
        <Text style={{ width: 100 }}>{userNumber}</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  upperContainer: {
    backgroundColor: "#3B414D",
    height: 40,
    justifyContent: "center",
    borderRadius: 10,
    width: "80%",
  },
  upperText: {
    color: "white",
    flex: 1,
    textAlign: "center",
    marginTop: 10,
  },
  buttonsContainer: {
    marginVertical: 10,
    flexDirection: "row",
    width: "80%",
  },
  buttonContainer: {
    flex: 1,
  },
});
