import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { Themes } from '~interfaces/themes'

const { persistAtom } = recoilPersist()

const theme = atom<Themes>({
  key: 'appTheme',
  default: 'light',
  effects_UNSTABLE: [persistAtom],
})

export default theme
