import { StyleSheet, Button, View } from 'react-native'

interface ButtonProps {
  buttonTitle: string
  onButtonPress: () => void
}

const CostomButton = (props: ButtonProps): JSX.Element => {
  const { buttonTitle, onButtonPress } = props
  return (
    <View style={styles.bottonStyle}>
      <Button onPress={ onButtonPress } title={buttonTitle}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  bottonStyle: {
    height: 60,
    width: 80
  }
})

export default CostomButton
