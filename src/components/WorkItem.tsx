import { Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props {
  name: string
  onPress?: () => void
}

const WorkItem = (props: Props): JSX.Element => {
  const { name, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={styles.WorkItem}>
      <Text style= {styles.WorkItemText}> { name }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  WorkItem: {
    height: 80,
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000'
  },
  WorkItemText: {
    fontSize: 32,
    fontWeight: 'bold'
  }
})

export default WorkItem
