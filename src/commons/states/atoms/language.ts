import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'
import { Languages } from '~interfaces/languages'

const { persistAtom } = recoilPersist()

const language = atom<Languages>({
  key: 'appLanguage',
  default: 'pt',
  effects_UNSTABLE: [persistAtom],
})

export default language
