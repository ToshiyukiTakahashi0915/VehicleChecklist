import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import WorkItem from '../../components/WorkItem'

const WorkList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header title='車両チェックリスト'/>
      <View style={styles.container}>
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
  }
})

export default WorkList
