import { View, StyleSheet } from 'react-native'

import WorkItem from '../../components/WorkItem'

const SSTList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <WorkItem onPress={() => {}} name= '1P-#1_SST_MAC'/>
        <WorkItem onPress={() => {}} name= '1P-#2_SST_MAC'/>
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

export default SSTList
