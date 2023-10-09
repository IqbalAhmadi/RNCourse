import { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="ADD Goal" onPress={addGoalHandler} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccccc',
  },
  textInput: {
    borderColor: '#cccccccc',
    borderWidth: 1,
    padding: 8,
    marginRight: 8,
    width: '70%',
  },
})
