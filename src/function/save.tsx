import * as FileSystem from 'expo-file-system'

// 配列をCSVファイルに変換する関数
const arrayToCsvString = (data: string[]): string => {
  return data.join(',')
}

export async function handleSave (data: string[], workName: string): Promise<void> {
  let uri = null
  try {
    // ユーザーにディレクトリを選択させる
    const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync()
    if (!permissions.granted) {
      // パーミッションが拒否された場合
      console.log('Directory permissions were denied')
      return
    } else {
      uri = permissions.directoryUri
    }
  } catch (error) {
    console.error(`パーミッションリクエストに失敗しました: ${error as string}`)
  }
  if (uri !== null) {
    try {
      // 日付データの取得
      const dataString = new Date().toISOString()
      // ファイル名に使える形に変換
      const fileName = `${workName}_${dataString.replace(/:/g, '_')}`
      // 選択されたディレクトリにファイルを作成する
      const newFileUri = await FileSystem.StorageAccessFramework.createFileAsync(
        uri,
        fileName,
        'text/csv'
      )
      const csvData = arrayToCsvString(data)
      // 新しいファイルにデータを書き込む
      await FileSystem.writeAsStringAsync(newFileUri, csvData, {
        encoding: FileSystem.EncodingType.UTF8
      })
      console.log(`CSVが保存された場所: ${newFileUri}`)
    } catch (error) {
      console.error(`1.保存に失敗しました: ${error as string}`)
    }
  } else {
    console.log('permissionsがnullです。')
  }
}
