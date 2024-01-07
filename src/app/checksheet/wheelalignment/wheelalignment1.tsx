import { View, StyleSheet } from 'react-native'

import WheelAlignment from '../../../components/wheelalignment'
import { router } from 'expo-router'
import { useRecoilState } from 'recoil'
import { wheelalignment1Atom } from '../../atom/checkSheetAtom'

const WheelAlignment1 = (): JSX.Element => {
  const handleNextPress = (): void => {
    router.replace('/checksheet/wheelalignment/wheelalignment2')
  }
  const [checkValues, setCheckValues] = useRecoilState(wheelalignment1Atom)
  return (
    <View style={styles.container}>
        <WheelAlignment
        checkSheetTitle='ホイールアライメントテスタ 校正前 前輪'
        onNextButton={handleNextPress}
        BackButtonDisabled={true}
        sheetKey='wheelalignment1'
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

export default WheelAlignment1
