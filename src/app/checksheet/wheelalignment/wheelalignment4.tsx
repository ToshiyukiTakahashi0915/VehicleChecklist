import { View, StyleSheet } from 'react-native'

import WheelAlignment from '../../../components/wheelalignment'
import { router } from 'expo-router'

const WheelAlignment1 = (): JSX.Element => {
  const handleBackPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment3')
  }
  return (
    <View style={styles.container}>
        <WheelAlignment
        checkSheetTitle='ホイールアライメントテスタ 校正前 後輪'
        onBackButton={handleBackPress}
        NextButtonDisabled={true}
        sheetKey='wheelalignment4'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default WheelAlignment1
