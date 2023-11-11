import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component'

import Header from '../src/components/Header'

const WheelAlignment = (): JSX.Element => {
  const tableHead = ['基準値', '移動量', '左輪', '左輪', '右輪', '右輪']
  const CheckTitle = ['′', 'mm', '指示値', '誤差', '指示値', '誤差']
  const tableData = [
    ['0', '0.00', '′', '', '′', ''],
    ['30', '14.01', '′', '', '′', ''],
    ['60', '18.03', '′', '', '′', ''],
    ['90', '22.05', '′', '', '′', ''],
    ['120', '26.06', '′', '', '′', '']
  ]

  const handleCellPress = (rowIndex: number, colIndex: number) => {
  }

  return (
    <View style={styles.container}>
      <Header title='ホイールアライメントテスタ'/>
      <View style={{ margin: 16 }}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#000000' }}>
          <Row
          data={['トー精度検査表 / 許容値: ±4']}
          style={styles.head}
          textStyle={styles.text}
          />
          <Row
          data={['CRT']}
          style={styles.head}
          textStyle={styles.text}
          />
          <Row
          data={tableHead}
          style={styles.head}
          textStyle={styles.text}
          />
          <Row data={CheckTitle}
          style={styles.head}
          textStyle={styles.text}
          />
          <Rows
          data={tableData}
          textStyle={styles.text}
          />
        </Table>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: '#000000',
    paddingTop: 16
  },
  head: {
    height: 40,
    backgroundColor: '#ffffff'
  },
  text: {
    margin: 6,
    textAlign: 'center'
  }
})

export default WheelAlignment
