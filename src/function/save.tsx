import { Alert } from 'react-native'
import XLSX from 'xlsx'
import * as FileSystem from 'expo-file-system'
import { Asset } from 'expo-asset'

async function handleSave (workName: string): Promise<void> {
  try {
    // 日付データの取得
    const dataString = new Date().toISOString()
    // ファイル名に使える形に変換
    const fileName = `${workName}_${dataString.replace(/:/g, '_')}`
    // 作業可能な環境ディレクトリと作成したファイル名を結合してフルのパスを作る
    const filePath = FileSystem.documentDirectory + fileName

    // assetsフォルダ配下のExcelファイルが実際のどのuriになるかを取得
    const [{ localUri }] = await Asset.loadAsync(
      require('../../assets/excellFomat/wat.xlsx')
    )
    console.log(localUri)
    // documentDirectoryにフォーマットファイルをコピー
    if (localUri !== null) {
      await FileSystem.copyAsync({
        from: localUri,
        to: filePath
      })
    }
    // 編集するファイルを読み込み
    const editFile = await FileSystem.readAsStringAsync(filePath, { encoding: FileSystem.EncodingType.Base64 })
    // 編集するファイルをworkbookとして使えるように
    const workBook = XLSX.read(editFile, { type: 'base64' })
    // ワークシートを取得 (一番最初のワークシートを取得)
    const workSheet = workBook.Sheets[workBook.SheetNames[0]]
    // 値の書き込み
    workSheet.G21 = { v: '55', t: 's', w: '55' }
    workSheet.M21 = { v: '55', t: 's', w: '55' }
    workSheet.V21 = { v: '55', t: 's', w: '55' }
    workSheet.G22 = { v: '55', t: 's', w: '55' }
    workSheet.M22 = { v: '55', t: 's', w: '55' }
    workSheet.V22 = { v: '55', t: 's', w: '55' }
    // workBookの変更内容をbase64形式に変換
    const updatedFileData = XLSX.write(workBook, { bookType: 'xlsx', type: 'base64' })
    // 変更内容をfilepathにあるフォーマットファイルのコピーに書き込み
    await FileSystem.writeAsStringAsync(filePath, updatedFileData, { encoding: FileSystem.EncodingType.Base64 })
    console.log('excelを読み込みが完了しました。')
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
