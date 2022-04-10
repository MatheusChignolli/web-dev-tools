import { FC } from 'react'
import { RecoilRoot } from 'recoil'

const StateProvider: FC = ({ children }) => <RecoilRoot>{children}</RecoilRoot>

export default StateProvider
