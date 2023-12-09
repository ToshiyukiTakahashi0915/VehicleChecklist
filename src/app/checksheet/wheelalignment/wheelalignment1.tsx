import { View, StyleSheet } from 'react-native'

import WheelAlignment from '../../../components/wheelalignment'
import { router } from 'expo-router'

const WheelAlignment1 = (): JSX.Element => {
  const handleNextPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment2')
  }
  return (
    <View style={styles.container}>
        <WheelAlignment
        checkSheetTitle='ホイールアライメントテスタ 校正前 前輪'
        onNextButton={handleNextPress}
        BackButtonDisabled={true}/>
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
