import React, { useState, useCallback } from 'react'
import {
  ScrollView, View, Text, TouchableOpacity, StyleSheet
} from 'react-native'

import Header from '../../components/Header'

import CalculatorKeypad from '../../components/calcratekeypad'

const WheelAlignment = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [showCalculatorKeypad, setShowCalculatorKeypad] = useState(false)

  const tableHead = ['基準値', '移動量', '左輪', '左輪', '右輪', '右輪']
  const CheckTitle = ['′', 'mm', '指示値', '誤差', '指示値', '誤差']
  const tableData1 = ['0', '0.00']
  const tableData2 = ['30', '14.01']
  const tableData3 = ['60', '18.03']
  const tableData4 = ['90', '22.05']
  const tableData5 = ['120', '26.06']

  const [inputData1, setInputData1] = useState(['0', '0', '0', '0'])
  const [inputData2, setInputData2] = useState(['0', '0', '0', '0'])
  const [inputData3, setInputData3] = useState(['0', '0', '0', '0'])
  const [inputData4, setInputData4] = useState(['0', '0', '0', '0'])
  const [inputData5, setInputData5] = useState(['0', '0', '0', '0'])

  const InputCell = ({ data, index }: { data: number, index: number }): JSX.Element => {
    let inputData
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
      default:
        inputData = inputData1
    }
    return (
      <TouchableOpacity style={styles.cell}>
          <Text
          onPress={() => { handleCellPress(index) }}
          style={{
            textAlign: 'center',
            lineHeight: 35
          }}>
          {inputData[index]}
          </Text>
      </TouchableOpacity>
    )
  }

  // 入力可能なセルがタップされた際のイベントハンドラ
  // 電卓コンポーネントの表示をtrueにしselectedIndexに
  // 渡されたindexを渡す
  const handleCellPress = useCallback((index: any): void => {
    setSelectedIndex(index)
    setShowCalculatorKeypad(true)
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Header title='ホイールアライメントテスタ'/>
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.headerCell}>トー精度検査表 / 許容値: ±4</Text>
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
          <InputCell data={1} index= {1}/>
          <InputCell data={1} index= {2}/>
          <InputCell data={1} index= {3}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData2[0]}</Text>
          <Text style={styles.cell}>{tableData2[1]}</Text>
          <InputCell data={2} index= {0}/>
          <InputCell data={2} index= {1}/>
          <InputCell data={2} index= {2}/>
          <InputCell data={2} index= {3}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData3[0]}</Text>
          <Text style={styles.cell}>{tableData3[1]}</Text>
          <InputCell data={3} index= {0}/>
          <InputCell data={3} index= {1}/>
          <InputCell data={3} index= {2}/>
          <InputCell data={3} index= {3}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData4[0]}</Text>
          <Text style={styles.cell}>{tableData4[1]}</Text>
          <InputCell data={4} index= {0}/>
          <InputCell data={4} index= {1}/>
          <InputCell data={4} index= {2}/>
          <InputCell data={4} index= {3}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData5[0]}</Text>
          <Text style={styles.cell}>{tableData5[1]}</Text>
          <InputCell data={5} index= {0}/>
          <InputCell data={5} index= {1}/>
          <InputCell data={5} index= {2}/>
          <InputCell data={5} index= {3}/>
        </View>
      </View>
      {showCalculatorKeypad && <CalculatorKeypad />}
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
  }
})

export default WheelAlignment
