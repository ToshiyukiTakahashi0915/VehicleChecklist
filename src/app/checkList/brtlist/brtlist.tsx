import { View, StyleSheet } from 'react-native'

import Header from '../../../components/Header'
import WorkItem from '../../../components/WorkItem'

const BRTList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header title='BRT'/>
      <View style={styles.container}>
        <WorkItem onPress={() => {}} name= '1P-#1_BRT_MAC'/>
        <WorkItem onPress={() => {}} name= '1P-#2_BRT_MAC'/>
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

export default BRTList
