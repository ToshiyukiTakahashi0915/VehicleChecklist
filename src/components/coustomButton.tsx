import { StyleSheet, Button, View } from 'react-native'

interface ButtonProps {
  buttonTitle: string
  onButtonPress?: () => void
  buttonDisabled?: boolean
}

const CostomButton = (props: ButtonProps): JSX.Element => {
  const { buttonTitle, onButtonPress, buttonDisabled } = props
  return (
    <View style={styles.bottonStyle}>
      <Button onPress={ onButtonPress } title={buttonTitle} disabled={buttonDisabled}></Button>
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
