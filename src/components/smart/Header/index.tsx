import { useMemo } from 'react'
import { useRecoilState } from 'recoil'
import { Switch, Typography } from '~components'
import { themeState } from '~states'
import { HeaderStyled } from './styles'

const Header = () => {
  const [theme, setTheme] = useRecoilState(themeState)

  const handleSwitch = (event: any) => {
    const checked = event.target.checked
    setTheme(checked ? 'dark' : 'light')
  }

  const switchChecked = useMemo(() => theme === 'dark', [theme])

  return (
    <HeaderStyled>
      <Typography variant="h5">Header</Typography>
      <Switch onChange={handleSwitch} color="default" checked={switchChecked} />
    </HeaderStyled>
  )
}

export default Header
