import React, { useState } from 'react'
import {
  type StyleProp, type ViewStyle, type TextStyle,
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native'

enum opeSym {
  none,
  plus,
  minus,
  multi,
  div
}

interface KeyItem {
  value: string
  customStyle?: StyleProp<ViewStyle | TextStyle>
  onPress: () => void
}

interface Calc {
  firstNum: number
  secondNum: number
  symbol: opeSym
}

class Calclater {
  public calculate (sym: opeSym, FirstNum: number, SecondNum: number): number {
    const calc: Calc = {
      firstNum: FirstNum,
      secondNum: SecondNum,
      symbol: sym
    }
    switch (calc.symbol) {
      case opeSym.plus:
        return calc.firstNum + calc.secondNum
      case opeSym.minus:
        return calc.firstNum - calc.secondNum
      case opeSym.multi:
        return calc.firstNum * calc.secondNum
      case opeSym.div:
        return calc.firstNum / calc.secondNum
      case opeSym.none:
        return 0
      default:
        return 0
    }
  }
}

const CalculatorComponent = (): JSX.Element => {
  const [displayText, setDisplayText] = useState('0')
  let isOperatorPressed = false
  let operator = opeSym.none
  let buffNumber = 0

  const calculater = new Calclater()

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
      isOperatorPressed = false
      return
    }
    // 演算子ボタンが押されたことがなく0割りをしたことがない処理
    if (displayText === '0') {
      setDisplayText(value)
    } else {
      setDisplayText(customRounding(displayText + value))
    }
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
    if (operator === opeSym.none) {
      return
    }
    if (displayText === '0' && operator === opeSym.div) {
    // 0割り算の時の処理
      setDisplayText('0で割ることはできません。')
      operator = opeSym.none
      buffNumber = 0
    } else {
      setDisplayText((calculater.calculate(operator, buffNumber, parseFloat(displayText))).toString())
      operator = opeSym.none
      buffNumber = 0
    }
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
    isOperatorPressed = false
    operator = opeSym.none
    buffNumber = 0
  }
  const opePress = (symbol: opeSym): void => {
    // OpeButtonが連続して押されたときの処理
    if (isOperatorPressed) {
      operator = symbol
      return
    }
    // 前回の計算で0割り算が行われた場合
    if (isNaN(Number(displayText))) {
      return
    }

    isOperatorPressed = true

    if (buffNumber === 0) {
      // 現状の画面の数字を取得
      buffNumber = parseFloat(displayText)
      // 押されたボタンの演算子のテキストを取得。
      operator = symbol
    } else {
    // イコールボタンが押されず演算子が続いた場合
      buffNumber = calculater.calculate(symbol, buffNumber, parseFloat(displayText))
      setDisplayText(customRounding(buffNumber.toString()))
      // 押されたボタンの演算子を取得。
      operator = symbol
    }
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
          <Key value="/" onPress={() => { opePress(opeSym.div) } } />
          <Key value="*" onPress={() => { opePress(opeSym.multi) } } />
          <Key value="bs" onPress={() => { deleatePress() } } />
        </View>
        {/* Row 2 */}
        <View style={styles.row}>
          <Key value="1" onPress={() => { numButtonPress('1') } } />
          <Key value="2" onPress={() => { numButtonPress('2') } } />
          <Key value="3" onPress={() => { numButtonPress('3') } } />
          <Key value="-" onPress={() => { opePress(opeSym.minus) } } />
        </View>
        {/* Row 3 */}
        <View style={styles.row}>
          <Key value="4" onPress={() => { numButtonPress('4') } } />
          <Key value="5" onPress={() => { numButtonPress('5') } } />
          <Key value="6" onPress={() => { numButtonPress('6') } } />
          <Key value="+" onPress={() => { opePress(opeSym.plus) } } />
        </View>
        {/* Row 4 */}
        <View style={{ flexDirection: 'column' }}>
          <View style={styles.row}>
            <Key value="7" onPress={() => { numButtonPress('7') } } />
            <Key value="8" onPress={() => { numButtonPress('8') } } />
            <Key value="9" onPress={() => { numButtonPress('9') } } />
            <Key value="=" onPress={() => { equalPress() } } />
          </View>
          {/* Row 5 */}
          <View style={styles.row}>
            <Key value="0" customStyle={styles.zero} onPress={() => { numButtonPress('0') } } />
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
