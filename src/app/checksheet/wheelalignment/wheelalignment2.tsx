import { View, StyleSheet } from 'react-native'

import WheelAlignment from '../../../components/wheelalignment'
import { router } from 'expo-router'

const WheelAlignment2 = (): JSX.Element => {
  const handleNextPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment3')
  }
  const handleBackPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment1')
  }
  return (
    <View style={styles.container}>
        <WheelAlignment
        checkSheetTitle='ホイールアライメントテスタ 校正前 後輪'
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

export default WheelAlignment2
