import { View, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import WorkItem from '../../components/WorkItem'

const handlePress = (): void => {
  router.push('/checksheet/wheelalignment/wheelalignment1')
}

const watList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <WorkItem onPress={() => { handlePress() }} name= '1P-#1_WAT_MAC'/>
        <WorkItem onPress={() => {}} name= '1P-#1_WAT-H角度計_MAC'/>
        <WorkItem onPress={() => {}} name= '1P-#2_WAT_AGCV'/>
        <WorkItem onPress={() => {}} name= '1P-#2_WAT_MAC'/>
        <WorkItem onPress={() => {}} name= '1P-#2_WAT-H角度計_MAC'/>
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

export default watList
