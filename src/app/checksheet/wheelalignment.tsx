import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import Header from '../../components/Header'

const WheelAlignment = (): JSX.Element => {
  const [textValue, setTextValue] = useState('0')

  const handlePress = (): void => {
    setTextValue(textValue + '1')
  }

  const tableHead = ['基準値', '移動量', '左輪', '左輪', '右輪', '右輪']
  const CheckTitle = ['′', 'mm', '指示値', '誤差', '指示値', '誤差']
  const tableData1 = ['0', '0.00']
  const tableData2 = ['30', '14.01']
  const tableData3 = ['60', '18.03']
  const tableData4 = ['90', '22.05']
  const tableData5 = ['120', '26.06']

  return (
    <View style={styles.container}>
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
          <Text
          onPress={() => { handlePress() }}
          style={styles.cell}>
          {textValue}
          </Text>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData2[0]}</Text>
          <Text style={styles.cell}>{tableData2[1]}</Text>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData3[0]}</Text>
          <Text style={styles.cell}>{tableData3[1]}</Text>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData4[0]}</Text>
          <Text style={styles.cell}>{tableData4[1]}</Text>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
        </View>

        <View style={styles.row}>
          <Text style={styles.cell}>{tableData5[0]}</Text>
          <Text style={styles.cell}>{tableData5[1]}</Text>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
          <TextInput style={styles.cell}>'</TextInput>
        </View>
      </View>
    </View>
  )
}

export default WheelAlignment

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
