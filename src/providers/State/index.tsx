import { RecoilRoot } from 'recoil'
import { StateProviderProps } from './interfaces'

const StateProvider = ({ children }: StateProviderProps) => (
  <RecoilRoot>{children}</RecoilRoot>
)

export default StateProvider
