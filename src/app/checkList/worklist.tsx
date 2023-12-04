import { View, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import WorkItem from '../../components/WorkItem'

const handlePress = (type: string): void => {
  switch (type) {
    case 'WAT':
      router.push('/checkList/watlist')
      break
    case 'TRT':
      router.push('/checkList/trtlist')
      break
    case 'SST':
      router.push('/checkList/frtlist')
      break
    case 'BRT':
      router.push('/checkList/brtlist')
      break
    default:
      break
  }
}

const WorkList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <WorkItem onPress={() => { handlePress('WAT') }} name= 'WAT'/>
        <WorkItem onPress={() => { handlePress('TRT') }} name= 'TRT'/>
        <WorkItem onPress={() => { handlePress('FRT') }} name= 'FRT'/>
        <WorkItem onPress={() => { handlePress('SST') }} name= 'SST'/>
        <WorkItem onPress={() => { handlePress('BRT') }} name= 'BRT'/>
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
