import { View, StyleSheet } from 'react-native'

import WheelAlignment from '../../../components/wheelalignment'
import { router } from 'expo-router'
import { wheelalignment2Atom } from '../../atom/checkSheetAtom'
import { useRecoilState } from 'recoil'

const WheelAlignment2 = (): JSX.Element => {
  const handleNextPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment3')
  }
  const handleBackPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment1')
  }
  const [checkValues, setCheckValues] = useRecoilState(wheelalignment2Atom)
  return (
    <View style={styles.container}>
        <WheelAlignment
        checkSheetTitle='ホイールアライメントテスタ 校正前 後輪'
        onNextButton={handleNextPress}
        onBackButton={handleBackPress}
        CheckValues={checkValues}
        SetCheckValues={setCheckValues}/>
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
