import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course Goal!"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                props.onAddGoal(enteredGoalText);
                setEnteredGoalText("");
              }}
              color="#5e0acc"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 8,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    marginRight: 10,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
