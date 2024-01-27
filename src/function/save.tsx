import { Alert } from 'react-native'
import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library'

// 配列をCSVファイルに変換する関数
const arrayToCsvString = (data: string[]): string => {
  return data.join(',')
}

async function handleSave (data: string[], workName: string): Promise<void> {
  try {
    // 日付データの取得
    const dataString = new Date().toISOString()
    // ファイル名に使える形に変換
    const fileName = `${workName}_${dataString.replace(/:/g, '_')}`
    // 作業可能な環境ディレクトリと作成したファイル名を結合してフルのパスを作る
    const filePath = FileSystem.documentDirectory + fileName + '.mp4'

    const csvData = arrayToCsvString(data)
    // CSVデータをファイルに書き込む
    await FileSystem.writeAsStringAsync(filePath, csvData, { encoding: FileSystem.EncodingType.UTF8 })
    console.log(`CSVが保存された場所: ${filePath}`)

    // ユーザーのメディアライブラリにアクセスするためのパーミッションを要求
    const { status } = await MediaLibrary.requestPermissionsAsync()
    console.log(`statusの値: ${status}`)
    if (status !== 'granted') {
      throw new Error('メディアライブラリへのアクセスが許可されていません。')
    }
    // Save to DCIM folder
    const asset = await MediaLibrary.createAssetAsync(filePath)

    const album = await MediaLibrary.getAlbumAsync(workName)
    if (album == null) {
      await MediaLibrary.createAlbumAsync(workName, asset, true)
    } else {
      await MediaLibrary.addAssetsToAlbumAsync([asset], album, true)
        .then(() => {
          console.log('保存に成功しました。')
        })
        .catch((err: string) => {
          console.log('保存が失敗しました。', err)
        })
    }

    console.log('アクセス権獲得')
    // 一時ファイルをユーザーのアクセス可能な場所に保存
    await MediaLibrary.saveToLibraryAsync(filePath)
  } catch (error) {
    console.error(`1.保存に失敗しました: ${error as string}`)
  }
}

export async function saveButtonPress (data: string[], workName: string): Promise<void> {
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
          handleSave(data, 'wheelalignment').then(() => {
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
