import { Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const screenWidth = Dimensions.get('window').width

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
    flex: 1,
    marginVertical: 32,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000'
  },
  WorkItemText: {
    fontSize: screenWidth < 400 ? 24 : 32,
    fontWeight: 'bold'
  }
})

export default WorkItem
