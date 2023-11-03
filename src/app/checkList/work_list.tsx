import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import WorkItem from '../../components/WorkItem'

const WorkList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header title='車両チェックリスト'/>
      <View>
        <WorkItem onPress={() => {}} name= 'WAT'/>
        <WorkItem onPress={() => {}} name= 'TRT'/>
        <WorkItem onPress={() => {}} name= 'FRT'/>
        <WorkItem onPress={() => {}} name= 'SST'/>
        <WorkItem onPress={() => {}} name= 'BRT'/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
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

export default WorkList
