import React, { useState, useCallback } from 'react'
import {
  Modal, View, Text, Dimensions,
  StyleSheet, Pressable
} from 'react-native'

import Decimal from 'decimal.js'

import CalculatorKeypad from './calcratekeypad'
import CostomButton from './coustomButton'
import { saveButtonPress } from '../function/save'

interface checkSheetProps {
  checkSheetTitle: string
  NextButtonDisabled?: boolean
  onNextButton?: () => void
  BackButtonDisabled?: boolean
  onBackButton?: () => void
  CheckValues: string[]
  SetCheckValues: any
}

const cellHeight = (Dimensions.get('window').height - 517) / 10

const WheelAlignment = (props: checkSheetProps): JSX.Element => {
  const { checkSheetTitle, NextButtonDisabled, onNextButton, BackButtonDisabled, onBackButton, CheckValues, SetCheckValues } = props
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

  const InputCell = ({ index }: { index: number }): JSX.Element => {
    const value = CheckValues[index]
    return (
      <Pressable
        style={styles.inputCell}
        disabled={isTopTableTup || isButtomTableTup}
        onPress={() => {
          if (!isTopTableTup || !isButtomTableTup) {
            handleCellPress(index, value)
          }
        }}
      >
        <Text
          style={{
            opacity: (isTopTableTup || isButtomTableTup) ? 0.5 : 1
          }}>
          {value}
          </Text>
      </Pressable>
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
      <View style={styles.bottomModalContainer}>
      <CalculatorKeypad buffValue={selectedValue} onEnterPress={handleEnterPress} />
      </View>
      )
    }
  }
  // 入力可能なセルがタップされた際のイベントハンドラ
  // 電卓コンポーネントの表示をtrueにしselectedIndexに
  // 渡されたindexを渡す
  // setSelectedValueで現状の画面の値を電卓に渡す
  const handleCellPress = useCallback((index: number, carrentValue: string): void => {
    setSelectedIndex(index)
    setSelectedValue(carrentValue)
    setIsTopTableTup(index < 10)
    setIsButtomTableTup(index >= 10)
  }, [])
  const handleEnterPress = useCallback((displayText: string) => {
    if (selectedIndex !== null && selectedIndex >= 0 && selectedIndex <= 19) {
      const newValues = CheckValues.map((value, i) => {
        if (selectedIndex === i) {
          return displayText
        }
        return value
      })
      SetCheckValues(newValues)
      setSelectedIndex(null)
      setIsTopTableTup(false)
      setIsButtomTableTup(false)
      setSelectedValue('')
    }
  }, [selectedIndex])

  return (
    <View style={styles.container}>
      <Text
      style={styles.titleText}>
        { checkSheetTitle }
        </Text>
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
          <InputCell index= {0}/>
          <ErrorCalculationCell inputNum={CheckValues[0]} errorNum={0}/>
          <InputCell index= {1}/>
          <ErrorCalculationCell inputNum={CheckValues[1]} errorNum={0}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData2[0]}</Text>
          <Text style={styles.cell}>{tableData2[1]}</Text>
          <InputCell index= {2}/>
          <ErrorCalculationCell inputNum={CheckValues[2]} errorNum={30}/>
          <InputCell index= {3}/>
          <ErrorCalculationCell inputNum={CheckValues[3]} errorNum={30}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData3[0]}</Text>
          <Text style={styles.cell}>{tableData3[1]}</Text>
          <InputCell index= {4}/>
          <ErrorCalculationCell inputNum={CheckValues[4]} errorNum={60}/>
          <InputCell index= {5}/>
          <ErrorCalculationCell inputNum={CheckValues[5]} errorNum={60}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData4[0]}</Text>
          <Text style={styles.cell}>{tableData4[1]}</Text>
          <InputCell index= {6}/>
          <ErrorCalculationCell inputNum={CheckValues[6]} errorNum={90}/>
          <InputCell index= {7}/>
          <ErrorCalculationCell inputNum={CheckValues[7]} errorNum={90}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData5[0]}</Text>
          <Text style={styles.cell}>{tableData5[1]}</Text>
          <InputCell index= {8}/>
          <ErrorCalculationCell inputNum={CheckValues[8]} errorNum={120}/>
          <InputCell index= {9}/>
          <ErrorCalculationCell inputNum={CheckValues[9]} errorNum={120}/>
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
          <InputCell index= {10}/>
          <ErrorCalculationCell inputNum={CheckValues[10]} errorNum={0}/>
          <InputCell index= {11}/>
          <ErrorCalculationCell inputNum={CheckValues[11]} errorNum={0}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData2[0]}</Text>
          <Text style={styles.cell}>{tableData2[1]}</Text>
          <InputCell index= {12}/>
          <ErrorCalculationCell inputNum={CheckValues[12]} errorNum={30}/>
          <InputCell index= {13}/>
          <ErrorCalculationCell inputNum={CheckValues[13]} errorNum={30}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData3[0]}</Text>
          <Text style={styles.cell}>{tableData3[1]}</Text>
          <InputCell index= {14}/>
          <ErrorCalculationCell inputNum={CheckValues[14]} errorNum={60}/>
          <InputCell index= {15}/>
          <ErrorCalculationCell inputNum={CheckValues[15]} errorNum={60}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData4[0]}</Text>
          <Text style={styles.cell}>{tableData4[1]}</Text>
          <InputCell index= {16}/>
          <ErrorCalculationCell inputNum={CheckValues[16]} errorNum={90}/>
          <InputCell index= {17}/>
          <ErrorCalculationCell inputNum={CheckValues[17]} errorNum={90}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData5[0]}</Text>
          <Text style={styles.cell}>{tableData5[1]}</Text>
          <InputCell index= {18}/>
          <ErrorCalculationCell inputNum={CheckValues[18]} errorNum={120}/>
          <InputCell index= {19}/>
          <ErrorCalculationCell inputNum={CheckValues[19]} errorNum={120}/>
        </View>
      </View>
      <View>
      <View style={styles.backButtonStyle}>
          <CostomButton
          buttonTitle='戻る'
          onButtonPress={onBackButton}
          buttonDisabled={BackButtonDisabled} ></CostomButton>
        </View>
        <View style={styles.saveButtonStyle}>
          <CostomButton buttonTitle='保存' onButtonPress={saveButtonPress} ></CostomButton>
        </View>
        <View style={styles.nextButtonStyle}>
          <CostomButton buttonTitle='次へ'
          onButtonPress={onNextButton}
          buttonDisabled={NextButtonDisabled} ></CostomButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  titleText: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 24,
    fontWeight: 'bold',
    height: 32
  },
  table: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20
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
    paddingVertical: 5,
    height: 35
  },
  inputCell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRightColor: '#000000',
    height: cellHeight
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    borderRightColor: '#000000',
    height: cellHeight
  },
  topModalContainer: {
    position: 'absolute',
    bottom: 65,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomModalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 65,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle: {
    position: 'absolute',
    justifyContent: 'center'
  },
  saveButtonStyle: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextButtonStyle: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    right: 16
  },
  backButtonStyle: {
    marginTop: 10,
    marginBottom: 10,
    position: 'absolute',
    left: 16
  }
})

export default WheelAlignment
