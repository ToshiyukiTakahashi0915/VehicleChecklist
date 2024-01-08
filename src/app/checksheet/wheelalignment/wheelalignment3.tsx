import { View, StyleSheet } from 'react-native'

import WheelAlignment from '../../../components/wheelalignment'
import { router } from 'expo-router'
import { wheelalignment3Atom } from '../../atom/checkSheetAtom'
import { useRecoilState } from 'recoil'

const WheelAlignment3 = (): JSX.Element => {
  const handleNextPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment4')
  }
  const handleBackPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment2')
  }
  const [checkValues, setCheckValues] = useRecoilState(wheelalignment3Atom)
  return (
    <View style={styles.container}>
        <WheelAlignment
        checkSheetTitle='ホイールアライメントテスタ 校正後 前輪'
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

export default WheelAlignment3
