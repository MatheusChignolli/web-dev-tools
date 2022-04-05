import { ChangeEvent, useMemo } from 'react'
import { SelectChangeEvent } from '@mui/material'
import { useRecoilState } from 'recoil'
import { MenuItem, Select, Switch, Typography } from '~components'
import { Languages } from '~interfaces/languages'
import { languageState, themeState } from '~states'
import { HeaderStyled } from './styles'

const Header = () => {
  const [theme, setTheme] = useRecoilState(themeState)
  const [language, setLanguage] = useRecoilState(languageState)

  const handleThemeSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setTheme(checked ? 'dark' : 'light')
  }

  const handleLanguageSelect = (event: SelectChangeEvent<Languages>) => {
    const selectedLanguage = event.target.value as Languages
    setLanguage(selectedLanguage)
  }

  const switchChecked = useMemo(() => theme === 'dark', [theme])

  return (
    <HeaderStyled>
      <Typography variant="h5">Header</Typography>
      <Select onChange={handleLanguageSelect} value={language}>
        <MenuItem value="en">en-US</MenuItem>
        <MenuItem value="pt">pt-BR</MenuItem>
      </Select>
      <Switch onChange={handleThemeSwitch} color="default" checked={switchChecked} />
    </HeaderStyled>
  )
}

export default Header
