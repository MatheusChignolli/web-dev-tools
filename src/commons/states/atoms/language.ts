import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const language = atom<'en' | 'pt'>({
  key: 'appLanguage',
  default: 'pt',
  effects_UNSTABLE: [persistAtom],
})

export default language
