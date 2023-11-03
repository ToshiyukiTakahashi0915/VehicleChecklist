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
  }
})

export default Header
