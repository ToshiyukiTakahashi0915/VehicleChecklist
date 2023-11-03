import { View, Text, StyleSheet } from 'react-native'

const WorkList = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>車両チェックリスト</Text>
      </View>
      <View>
        <View style={styles.WorkItem}>
          <Text>WAT</Text>
        </View>
        <View style={styles.WorkItem}>
          <Text>TRT</Text>
        </View>
        <View style={styles.WorkItem}>
          <Text>FRT</Text>
        </View >
        <View style={styles.WorkItem}>
          <Text>SST</Text>
        </View>
        <View style={styles.WorkItem}>
          <Text>BRT</Text>
        </View >
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#467FD3',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  headerTitle: {
    color: '#000000',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  WorkItem: {
    height: 80,
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000'
  }
})

export default WorkList
