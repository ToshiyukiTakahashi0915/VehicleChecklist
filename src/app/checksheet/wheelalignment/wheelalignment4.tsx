import { View, StyleSheet } from 'react-native'

import WheelAlignment from '../../../components/wheelalignment'
import { router } from 'expo-router'
import { wheelalignment4Atom } from '../../atom/checkSheetAtom'
import { useRecoilState } from 'recoil'

const WheelAlignment4 = (): JSX.Element => {
  const handleBackPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment3')
  }
  const [checkValues, setCheckValues] = useRecoilState(wheelalignment4Atom)
  return (
    <View style={styles.container}>
        <WheelAlignment
        checkSheetTitle='ホイールアライメントテスタ 校正前 後輪'
        onBackButton={handleBackPress}
        NextButtonDisabled={true}
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

export default WheelAlignment4
