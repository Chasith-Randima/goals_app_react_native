import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [currentCourseGoals, setCurrentCourseGoals] = useState([]);
  const [modelIsVisible, setModelIsVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    setCurrentCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
    setModelIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setCurrentCourseGoals((currentGoals) => {
      return currentCourseGoals.filter((goal) => goal !== id);
    });
  };

  const startAddGoalHandler = () => {
    setModelIsVisible(true);
  };
  const endAddGoalHandler = () => {
    setModelIsVisible(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modelIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={currentCourseGoals}
            renderItem={(itemData) => (
              <GoalItem text={itemData.item} onDeleteItem={deleteGoalHandler} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
