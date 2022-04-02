import { useRecoilState } from 'recoil'
import { themeState } from '~states'
import theme from '~theme'

const useTheme = () => {
  const [appTheme] = useRecoilState(themeState)

  return theme[appTheme]
}

export default useTheme
