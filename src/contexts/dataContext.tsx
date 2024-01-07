import { createContext, useState, type ReactNode } from 'react'

// DataContextは最初にstringの空の状態で作成されdataProviderの中でvaluesが初期値の状態で格納され
// updateValues関数の機能が格納された状態でDataContextの親要素で呼び出されたときにラップされたchildren（各コンポーネント）を囲い
// そのReact要素をdataProviderは戻り値としている。ラップされたchildrenは親要素のValuesとupdateValuesにアクセスできる。

interface DataProviderProps {
  children: ReactNode
  // ReactNodeはReactのコンポーネントが受け入れられるあらゆる子要素(文字列、数値、bool、オブジェクトなど)
}
// オブジェクトで、各キーが文字列で、値が文字列の配列
type CheckSheetValues = Record<string, string[]>
// ページ毎の空の20個の要素を持った配列
const defaultAlignmentValues: CheckSheetValues = {
  wheelalignment1: new Array(20).fill('1'),
  wheelalignment2: new Array(20).fill('0'),
  wheelalignment3: new Array(20).fill('0'),
  wheelalignment4: new Array(20).fill('0')
}
export const DataContext =
createContext(null)

export const DataProvider = ({ children }: DataProviderProps): JSX.Element => {
  const [values, setValues] = useState<CheckSheetValues>(defaultAlignmentValues)

  const updateValues = (group: string, index: number, newValue: string): void => {
    console.log('updateValuesが呼び出されました。', group, index, newValue)
    setValues((prevValues) => {
      console.log('setValuesが呼び出されました。', prevValues)
      // ここで prevValues を使用して状態を更新する
      // 例: wheelalignment1 の特定のインデックスの値を newValue に変更
      const updatedValues: CheckSheetValues = { ...prevValues }
      // groupに対応する配列を深いコピー
      updatedValues[group] = [...prevValues[group]]
      updatedValues[group][index] = newValue
      console.log('newValue:', newValue)
      console.log(updatedValues[group][index])
      return updatedValues
    })
  }
  console.log('DataProvider内: データが提供されました。', values)
  return (
    <DataContext.Provider value={{ values, updateValues }}>
      {children}
    </DataContext.Provider>
  )
}
