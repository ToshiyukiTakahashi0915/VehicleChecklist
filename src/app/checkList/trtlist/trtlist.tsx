import { View, StyleSheet } from 'react-native'

import Header from '../../../components/Header'
import WorkItem from '../../../components/WorkItem'

const TRTList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header title='TRT'/>
      <View style={styles.container}>
        <WorkItem onPress={() => {}} name= '1P-#1_TRT_MAC'/>
        <WorkItem onPress={() => {}} name= '1P-#2_TRT_MAC'/>
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

export default TRTList
