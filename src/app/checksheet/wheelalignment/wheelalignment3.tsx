import { View, StyleSheet } from 'react-native'

import WheelAlignment from '../../../components/wheelalignment'
import { router } from 'expo-router'

const WheelAlignment3 = (): JSX.Element => {
  const handleNextPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment4')
  }
  const handleBackPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment2')
  }
  return (
    <View style={styles.container}>
        <WheelAlignment
        checkSheetTitle='ホイールアライメントテスタ 校正後 前輪'
        onNextButton={handleNextPress}
        onBackButton={handleBackPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default WheelAlignment3
