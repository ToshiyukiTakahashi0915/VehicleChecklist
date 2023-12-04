import React, { useState, useCallback } from 'react'
import {
  ScrollView, Modal, View, Text, Dimensions,
  TouchableOpacity, StyleSheet, Button, Alert
} from 'react-native'

import Decimal from 'decimal.js'

import CalculatorKeypad from '../../components/calcratekeypad'
// 画面の高さを取得
const windowHeight = Dimensions.get('window').height

const WheelAlignment = (): JSX.Element => {
  // 押されたセルの配列がどれかをあらわす
  const [selectedData, setSelectedData] = useState<number | null>(null)
  // 押されたセルの配列内のどこかを表す
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  // calcraterkeypadに渡す現状の画面の値
  const [selectedValue, setSelectedValue] = useState('')
  // modalを管理する値
  const [isTopTableTup, setIsTopTableTup] = useState(false)
  const [isButtomTableTup, setIsButtomTableTup] = useState(false)

  const tableHead = ['基準値', '移動量', '左輪', '左輪', '右輪', '右輪']
  const CheckTitle = ['′', 'mm', '指示値', '誤差', '指示値', '誤差']
  const tableData1 = ['0', '0.00']
  const tableData2 = ['30', '14.01']
  const tableData3 = ['60', '18.03']
  const tableData4 = ['90', '22.05']
  const tableData5 = ['120', '26.06']

  const [inputData1, setInputData1] = useState(['0', '0'])
  const [inputData2, setInputData2] = useState(['0', '0'])
  const [inputData3, setInputData3] = useState(['0', '0'])
  const [inputData4, setInputData4] = useState(['0', '0'])
  const [inputData5, setInputData5] = useState(['0', '0'])

  const [inputData6, setInputData6] = useState(['0', '0'])
  const [inputData7, setInputData7] = useState(['0', '0'])
  const [inputData8, setInputData8] = useState(['0', '0'])
  const [inputData9, setInputData9] = useState(['0', '0'])
  const [inputData10, setInputData10] = useState(['0', '0'])

  const InputCell = ({ data, index }: { data: number, index: number }): JSX.Element => {
    let inputData: string[]
    // 与えられたdataに応じて適切なinputDataを選択
    switch (data) {
      case 1:
        inputData = inputData1
        break
      case 2:
        inputData = inputData2
        break
      case 3:
        inputData = inputData3
        break
      case 4:
        inputData = inputData4
        break
      case 5:
        inputData = inputData5
        break
      case 6:
        inputData = inputData6
        break
      case 7:
        inputData = inputData7
        break
      case 8:
        inputData = inputData8
        break
      case 9:
        inputData = inputData9
        break
      case 10:
        inputData = inputData10
        break
      default:
        inputData = inputData1
    }
    return (
      <TouchableOpacity
        style={styles.cell}
        disabled={isTopTableTup || isButtomTableTup}
        onPress={() => {
          if (!isTopTableTup || !isButtomTableTup) {
            handleCellPress(index, inputData, data)
          }
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            lineHeight: 35,
            opacity: (isTopTableTup || isButtomTableTup) ? 0.5 : 1
          }}>
          {inputData[index]}
          </Text>
      </TouchableOpacity>
    )
  }

  const ErrorCalculationCell =
  ({ inputNum, errorNum }: { inputNum: string, errorNum: number }): JSX.Element => {
    const InputNum = new Decimal(inputNum)
    const ErrorNum = new Decimal(errorNum)
    let enterNum: string
    if (inputNum === '0') {
      enterNum = '0'
    } else {
      enterNum = String(InputNum.minus(ErrorNum))
    }
    return (
      <Text style={styles.cell}>{enterNum}</Text>
    )
  }

  const renderModalContent = (): JSX.Element => {
    if (isTopTableTup) {
      return (
      <View style={styles.topModalContainer}>
      <CalculatorKeypad buffValue={selectedValue} onEnterPress={handleEnterPress} />
      </View>
      )
    } else {
      return (
      <View style={styles.buttomModalContainer}>
      <CalculatorKeypad buffValue={selectedValue} onEnterPress={handleEnterPress} />
      </View>
      )
    }
  }

  // 入力可能なセルがタップされた際のイベントハンドラ
  // 電卓コンポーネントの表示をtrueにしselectedIndexに
  // 渡されたindexを渡す
  // setSelectedValueで現状の画面の値を電卓に渡す
  const handleCellPress = useCallback((index: number, inputData: string[], dataNum: number): void => {
    setSelectedIndex(index)
    setSelectedData(dataNum)
    setSelectedValue(inputData[index])
    if (dataNum >= 1 && dataNum <= 5) {
      setIsTopTableTup(true)
    } else {
      setIsButtomTableTup(true)
    }
  }, [])

  const handleEnterPress = useCallback((displayText: string) => {
    if (selectedIndex !== null && selectedData !== null && selectedData >= 1 && selectedData <= 10) {
      switch (selectedData) {
        case 1:
          setInputData1((prev) => [...prev.slice(0, selectedIndex), displayText, ...prev.slice(selectedIndex + 1)])
          break
        case 2:
          setInputData2((prev) => [...prev.slice(0, selectedIndex), displayText, ...prev.slice(selectedIndex + 1)])
          break
        case 3:
          setInputData3((prev) => [...prev.slice(0, selectedIndex), displayText, ...prev.slice(selectedIndex + 1)])
          break
        case 4:
          setInputData4((prev) => [...prev.slice(0, selectedIndex), displayText, ...prev.slice(selectedIndex + 1)])
          break
        case 5:
          setInputData5((prev) => [...prev.slice(0, selectedIndex), displayText, ...prev.slice(selectedIndex + 1)])
          break
        case 6:
          setInputData6((prev) => [...prev.slice(0, selectedIndex), displayText, ...prev.slice(selectedIndex + 1)])
          break
        case 7:
          setInputData7((prev) => [...prev.slice(0, selectedIndex), displayText, ...prev.slice(selectedIndex + 1)])
          break
        case 8:
          setInputData8((prev) => [...prev.slice(0, selectedIndex), displayText, ...prev.slice(selectedIndex + 1)])
          break
        case 9:
          setInputData9((prev) => [...prev.slice(0, selectedIndex), displayText, ...prev.slice(selectedIndex + 1)])
          break
        case 10:
          setInputData10((prev) => [...prev.slice(0, selectedIndex), displayText, ...prev.slice(selectedIndex + 1)])
          break
        default:
          break
      }
      setSelectedData(null)
      setSelectedIndex(null)
      setIsTopTableTup(false)
      setIsButtomTableTup(false)
      setSelectedValue('')
    }
  }, [selectedData])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.headerCell}>トー精度検査表 / 許容値: ±2</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.headerCell}>CRT</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.headerCell}>{tableHead[0]}</Text>
          <Text style={styles.headerCell}>{tableHead[1]}</Text>
          <Text style={styles.headerCell}>{tableHead[2]}</Text>
          <Text style={styles.headerCell}>{tableHead[3]}</Text>
          <Text style={styles.headerCell}>{tableHead[4]}</Text>
          <Text style={styles.headerCell}>{tableHead[5]}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.headerCell}>{CheckTitle[0]}</Text>
          <Text style={styles.headerCell}>{CheckTitle[1]}</Text>
          <Text style={styles.headerCell}>{CheckTitle[2]}</Text>
          <Text style={styles.headerCell}>{CheckTitle[3]}</Text>
          <Text style={styles.headerCell}>{CheckTitle[4]}</Text>
          <Text style={styles.headerCell}>{CheckTitle[5]}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData1[0]}</Text>
          <Text style={styles.cell}>{tableData1[1]}</Text>
          <InputCell data={1} index= {0}/>
          <ErrorCalculationCell inputNum={inputData1[0]} errorNum={0}/>
          <InputCell data={1} index= {1}/>
          <ErrorCalculationCell inputNum={inputData1[1]} errorNum={0}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData2[0]}</Text>
          <Text style={styles.cell}>{tableData2[1]}</Text>
          <InputCell data={2} index= {0}/>
          <ErrorCalculationCell inputNum={inputData2[0]} errorNum={30}/>
          <InputCell data={2} index= {1}/>
          <ErrorCalculationCell inputNum={inputData2[1]} errorNum={30}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData3[0]}</Text>
          <Text style={styles.cell}>{tableData3[1]}</Text>
          <InputCell data={3} index= {0}/>
          <ErrorCalculationCell inputNum={inputData3[0]} errorNum={60}/>
          <InputCell data={3} index= {1}/>
          <ErrorCalculationCell inputNum={inputData3[1]} errorNum={60}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData4[0]}</Text>
          <Text style={styles.cell}>{tableData4[1]}</Text>
          <InputCell data={4} index= {0}/>
          <ErrorCalculationCell inputNum={inputData4[0]} errorNum={90}/>
          <InputCell data={4} index= {1}/>
          <ErrorCalculationCell inputNum={inputData4[1]} errorNum={90}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData5[0]}</Text>
          <Text style={styles.cell}>{tableData5[1]}</Text>
          <InputCell data={5} index= {0}/>
          <ErrorCalculationCell inputNum={inputData5[0]} errorNum={120}/>
          <InputCell data={5} index= {1}/>
          <ErrorCalculationCell inputNum={inputData5[1]} errorNum={120}/>
        </View>
      </View>

      <Modal
        visible={isTopTableTup || isButtomTableTup}
        transparent={true}
      >
        {renderModalContent()}
      </Modal>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.headerCell}>キャンバ精度検査表 / 許容値: ±4</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.headerCell}>CRT</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.headerCell}>{tableHead[0]}</Text>
          <Text style={styles.headerCell}>{tableHead[1]}</Text>
          <Text style={styles.headerCell}>{tableHead[2]}</Text>
          <Text style={styles.headerCell}>{tableHead[3]}</Text>
          <Text style={styles.headerCell}>{tableHead[4]}</Text>
          <Text style={styles.headerCell}>{tableHead[5]}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.headerCell}>{CheckTitle[0]}</Text>
          <Text style={styles.headerCell}>{CheckTitle[1]}</Text>
          <Text style={styles.headerCell}>{CheckTitle[2]}</Text>
          <Text style={styles.headerCell}>{CheckTitle[3]}</Text>
          <Text style={styles.headerCell}>{CheckTitle[4]}</Text>
          <Text style={styles.headerCell}>{CheckTitle[5]}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData1[0]}</Text>
          <Text style={styles.cell}>{tableData1[1]}</Text>
          <InputCell data={6} index= {0}/>
          <ErrorCalculationCell inputNum={inputData6[0]} errorNum={0}/>
          <InputCell data={6} index= {1}/>
          <ErrorCalculationCell inputNum={inputData6[1]} errorNum={0}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData2[0]}</Text>
          <Text style={styles.cell}>{tableData2[1]}</Text>
          <InputCell data={7} index= {0}/>
          <ErrorCalculationCell inputNum={inputData7[0]} errorNum={30}/>
          <InputCell data={7} index= {1}/>
          <ErrorCalculationCell inputNum={inputData7[1]} errorNum={30}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData3[0]}</Text>
          <Text style={styles.cell}>{tableData3[1]}</Text>
          <InputCell data={8} index= {0}/>
          <ErrorCalculationCell inputNum={inputData8[0]} errorNum={60}/>
          <InputCell data={8} index= {1}/>
          <ErrorCalculationCell inputNum={inputData8[1]} errorNum={60}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData4[0]}</Text>
          <Text style={styles.cell}>{tableData4[1]}</Text>
          <InputCell data={9} index= {0}/>
          <ErrorCalculationCell inputNum={inputData9[0]} errorNum={90}/>
          <InputCell data={9} index= {1}/>
          <ErrorCalculationCell inputNum={inputData9[1]} errorNum={90}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData5[0]}</Text>
          <Text style={styles.cell}>{tableData5[1]}</Text>
          <InputCell data={10} index= {0}/>
          <ErrorCalculationCell inputNum={inputData10[0]} errorNum={120}/>
          <InputCell data={10} index= {1}/>
          <ErrorCalculationCell inputNum={inputData10[1]} errorNum={120}/>
        </View>
      </View>
      <Button onPress={() => { Alert.alert('button pressed') }} title='保存'></Button>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  table: {
    padding: 10,
    margin: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth: 1,
    borderRightColor: '#000000',
    paddingVertical: 5
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderRightColor: '#000000',
    height: 40
  },
  topModalContainer: {
    position: 'absolute',
    top: windowHeight / 2 - (410 / 2),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttomModalContainer: {
    position: 'absolute',
    bottom: windowHeight / 2 - (410 / 2),
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default WheelAlignment
