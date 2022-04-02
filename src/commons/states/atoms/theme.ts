import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const theme = atom<'dark' | 'light'>({
  key: 'appTheme',
  default: 'light',
  effects_UNSTABLE: [persistAtom],
})

export default theme
