import React, { useState } from 'react'
import {
  type StyleProp, type ViewStyle, type TextStyle,
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native'

interface KeyItem {
  value: string
  customStyle?: StyleProp<ViewStyle | TextStyle>
  onPress: () => void
}

const CalculatorComponent = (): JSX.Element => {
  const [displayText, setDisplayText] = useState('0')
  const [isOperatorPressed, setIsOperatorPressed] = useState(false)
  const [Operator, setOperator] = useState('')

  function customRounding (num: string): string {
    if (num.length > 16) {
      if ((Boolean(num.includes('.'))) && num.indexOf('.') > 16) {
        return '表示できる桁数を超えています。'
      }
      num = num.substring(0, 16)
    }
    return num
  }

  function numButtonPress (value: string): void {
    // 0割が行われた時の処理
    if (isNaN(Number(displayText))) {
      setDisplayText(value)
      return
    }
    // 演算子ボタンが押されていた時の処理
    if (isOperatorPressed) {
      setDisplayText(value)
      setIsOperatorPressed(false)
      return
    }
    // 演算子ボタンが押されたことがなく0割りをしたことがない処理
    if (displayText === '0') {
      setDisplayText(value)
    } else {
      setDisplayText(customRounding(displayText + value))
    }
  }

  const zeroPress = (): void => {
    numButtonPress('0')
  }
  const onePress = (): void => {
    numButtonPress('1')
  }
  const twoPress = (): void => {
    numButtonPress('2')
  }
  const threePress = (): void => {
    numButtonPress('3')
  }
  const fourPress = (): void => {
    numButtonPress('4')
  }
  const fivePress = (): void => {
    numButtonPress('5')
  }
  const sixPress = (): void => {
    numButtonPress('6')
  }
  const sevenPress = (): void => {
    numButtonPress('7')
  }
  const eightPress = (): void => {
    numButtonPress('8')
  }
  const ninePress = (): void => {
    numButtonPress('9')
  }
  const connmaPress = (): void => {
    // 0割が行われた時の処理
    if (isNaN(Number(displayText))) {
      return
    }
    if (displayText.includes('.')) {
      return
    }
    setDisplayText(displayText + '.')
  }
  const enterPress = (): void => {
    console.log('enterが押されました。')
  }
  const equalPress = (): void => {
    console.log('equalが押されました。')
  }
  const deleatePress = (): void => {
    // 0割が行われた時の処理
    if (isNaN(Number(displayText))) {
      return
    }
    // 小数点以下が1つだけの時DeleteButtonが押されたら切り捨てて表示する。
    // Substringを使う
    if (displayText.includes('.') && displayText.indexOf('.') === displayText.length - 2) {
      setDisplayText(displayText.substring(0, displayText.length - 2))
      return
    }
    // －の値が1桁の時
    if (displayText.includes('-') && displayText.length === 2) {
      setDisplayText('0')
      return
    }
    if (displayText.length === 1) {
      setDisplayText('0')
    } else {
      setDisplayText(displayText.slice(0, -1))
    }
  }
  const clearPress = (): void => {
    setDisplayText('0')
    setIsOperatorPressed(false)
    setOperator('')
  }
  const opePress = (value: string): void => {
    console.log(
      'Preaaed value:', value
    )
    setIsOperatorPressed(true)
    setOperator(value)
  }
  return (
    <View style={styles.container}>
      <View style={styles.calclator}>
        {/* Display */}
        <View style={styles.display}>
          <Text style={styles.displayText}>{displayText}</Text>
        </View>
        {/* Row 1 */}
        <View style={styles.row}>
          <Key value="C" onPress={() => { clearPress() } } />
          <Key value="/" onPress={() => { opePress('/') } } />
          <Key value="*" onPress={() => { opePress('*') } } />
          <Key value="bs" onPress={() => { deleatePress() } } />
        </View>
        {/* Row 2 */}
        <View style={styles.row}>
          <Key value="1" onPress={() => { onePress() } } />
          <Key value="2" onPress={() => { twoPress() } } />
          <Key value="3" onPress={() => { threePress() } } />
          <Key value="-" onPress={() => { opePress('-') } } />
        </View>
        {/* Row 3 */}
        <View style={styles.row}>
          <Key value="4" onPress={() => { fourPress() } } />
          <Key value="5" onPress={() => { fivePress() } } />
          <Key value="6" onPress={() => { sixPress() } } />
          <Key value="+" onPress={() => { opePress('+') } } />
        </View>
        {/* Row 4 */}
        <View style={{ flexDirection: 'column' }}>
          <View style={styles.row}>
            <Key value="7" onPress={() => { sevenPress() } } />
            <Key value="8" onPress={() => { eightPress() } } />
            <Key value="9" onPress={() => { ninePress() } } />
            <Key value="=" onPress={() => { equalPress() } } />
          </View>
          {/* Row 5 */}
          <View style={styles.row}>
            <Key value="0" customStyle={styles.zero} onPress={() => { zeroPress() } } />
            <Key value="." onPress={() => { connmaPress() } } />
            <Key value="enter" onPress={() => { enterPress() } } />
          </View>
        </View>
      </View>
    </View>
  )
}

const Key = (keyItem: KeyItem): JSX.Element => {
  const { value, customStyle, onPress } = keyItem
  return (
    <TouchableOpacity
    style={[styles.key, customStyle]}
    onPress={ onPress }
    >
      <Text style={styles.keyText}>{value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  calclator: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#000000',
    width: 250,
    backgroundColor: '#ffffff'
  },
  display: {
    height: 60,
    width: 230,
    margin: 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5
  },
  displayText: {
    textAlign: 'right',
    fontSize: 24
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  key: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000'
  },
  keyText: {
    fontSize: 18
  },
  enter: {
    height: 110 // 縦幅2倍
  },
  zero: {
    width: 110 // 横幅2倍
  }
})

export default CalculatorComponent
