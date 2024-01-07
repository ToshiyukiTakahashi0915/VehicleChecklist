import { Stack } from 'expo-router'
import { RecoilRoot } from 'recoil'

const Layout = (): JSX.Element => {
  return (
  <RecoilRoot>
  <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#467FD3'
    },
    headerTitleAlign: 'center',
    headerTintColor: '#ffffff',
    headerTitle: '車両チェックリスト',
    headerBackTitle: '戻る',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    }
  }}/>
  </RecoilRoot>)
}

export default Layout
