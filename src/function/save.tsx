import { Alert } from 'react-native'
import XLSX from 'xlsx'
import * as FileSystem from 'expo-file-system' // Expoを使用している場合、FileSystemを追加

async function handleSave (workName: string): Promise<void> {
  try {
    // console.log('try文の中に入りました。')
    // プロジェクトのアセットディレクトリに配置されたExcelファイルを読み込む
    // const asset = Asset.fromModule(require('../../assets/excellFomat/1P-#1_WAT_MAC_Ver1.1_22-10_入力済.xlsm'))
    // const defaultExcel = await readFile('../../assets/excellFomat/1P-#1_WAT_MAC_Ver1.1_22-10_入力済.xlsm', 'shiftjis')
    // console.log('excelを読み込みを実行しました。')
    // Excelファイルのダウンロードを待つ
    // await asset.downloadAsync()
    // console.log('excelのダウンロードが完了しました。')

    // 日付データの取得
    // const dataString = new Date().toISOString()
    // console.log('日付データの取得')
    // ファイル名に使える形に変換
    // const fileName = `${workName}_${dataString.replace(/:/g, '_')}`
    // console.log('fileNameの作成')
    // 作業可能な環境ディレクトリと作成したファイル名を結合してフルのパスを作る
    // const filePath = FileSystem.documentDirectory + fileName
    // console.log('filePathの作成')

    // const defaultExcel = copyFileAssets('../../assets/excellFomat/1P-#1_WAT_MAC_Ver1.1_22-10_入力済.xlsm', '../../createExcelFile')
    // const workBook = XLSX.read(defaultExcel, { type: 'string' })
    // ワークシートを取得 (一番最初のワークシートを取得)
    // const workSheet = workBook.Sheets[workBook.SheetNames[0]]
    // console.log('ワークシートを取得 (一番最初のワークシートを取得')
    // ワークシートの特定のセルに値を書き込む
    // workSheet.G21 = { t: 's', v: '55' }
    // アセットにあるフォーマットファイルをfilePathの場所にコピー
    // await FileSystem.copyAsync({ from: asset.uri, to: filePath })
    // console.log('アセットにあるフォーマットファイルをfilePathの場所にコピー')
    // コピーしたファイルのデータを読み込む
    // const fileData = await FileSystem.readAsStringAsync(filePath, { encoding: FileSystem.EncodingType.Base64 })
    // console.log('コピーしたファイルのデータを読み込む')
    // 読み込んだデータからワークブックオブジェクトを生成
    // const workBook = XLSX.read(fileData, { type: 'base64' })
    // console.log('読み込んだデータからワークブックオブジェクトを生成')
    // console.log('ワークシートの特定のセルに値を書き込む')
    // 編集したワークブックデータを元のファイルに上書き保存
    // const updatedFileData = XLSX.write(workBook, { bookType: 'xlsx', type: 'base64' })
    // console.log('updatedFileDataの作成')
    // await FileSystem.writeAsStringAsync(filePath, updatedFileData, { encoding: FileSystem.EncodingType.Base64 })
    // console.log(`1.保存が完了しました。ファイルは以下のパスに保存されています：${filePath}`)
  } catch (error) {
    console.error(`1.保存に失敗しました: ${error as string}`)
  }
}

export async function saveButtonPress (): Promise<void> {
  Alert.alert(
    '保存',
    '保存を実行します。\n実行後はすべての値が初期値に戻ります。',
    [
      {
        text: 'いいえ',
        onPress: () => { console.log('いいえが押されました。') },
        style: 'cancel'
      },
      {
        text: 'はい',
        onPress: () => {
          handleSave('wheelalignment').then(() => {
            console.log('2.保存が完了しました。')
          }).catch((error) => {
            console.error(`2.保存に失敗しました: ${error}`)
          })
        }
      }
    ],
    { cancelable: true }
  )
}
