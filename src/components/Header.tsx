import { View, Text, StyleSheet } from 'react-native'

interface Props {
  title: string
}

const Header = (props: Props): JSX.Element => {
  const { title } = props
  return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{ title }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#467FD3',
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 19
  },
  headerTitle: {
    textAlignVertical: 'bottom',
    color: '#000000',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  }
})

export default Header
