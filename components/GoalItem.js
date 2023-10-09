import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#4D4C7D' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={(pressed) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#9D76C1',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#fff',
    padding: 8,
  },
})
