import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function GameStartScreen({ pickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  function resetButtonHandler() {
    setEnteredNumber("");
  }

  function confirmButtonHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetButtonHandler },
      ]);
      return;
    }

    pickedNumber(enteredNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={inputHandler}
        style={styles.inputBox}
        keyboardType="number-pad"
        maxLength={2}
        autoCorrect={false}
        autoCapitalize="none"
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetButtonHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmButtonHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    marginTop: 100,
    marginHorizontal: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    borderBottomColor: "#131723",
    borderBottomWidth: 2,
    margin: 8,
    width: 50,
    fontSize: 28,
    fontWeight: "bold",
    padding: 4,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
