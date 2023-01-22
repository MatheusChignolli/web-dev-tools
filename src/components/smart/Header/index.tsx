import { SelectChangeEvent } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useRecoilState } from 'recoil'
import { useTranslation } from 'react-i18next'
import { Typography, Link, IconButton } from '~components'
import { Languages } from '~interfaces/languages'
import { languageState, themeState } from '~states'
import { LanguagesConstants } from '~constants'
import { HeaderStyled, SelectStyled, MenuItemStyled } from './styles'

const Header = () => {
  const { t } = useTranslation()
  const [theme, setTheme] = useRecoilState(themeState)
  const [language, setLanguage] = useRecoilState(languageState)

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const handleLanguageSelect = (event: SelectChangeEvent<unknown>) => {
    const selectedLanguage = event.target.value as Languages
    setLanguage(selectedLanguage)
  }

  return (
    <HeaderStyled aria-label={t<string>('header.ariaLabels.section')}>
      <Link.Internal to="/">
        <Typography variant="h5">{t<string>('header.title')}</Typography>
      </Link.Internal>
      <div>
        <IconButton sx={{ p: 1, mr: 2 }} onClick={handleThemeSwitch} color="inherit">
          {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <SelectStyled
          variant="filled"
          onChange={handleLanguageSelect}
          value={language}
          aria-label={t<string>('header.ariaLabels.languageSelect')}
        >
          {LanguagesConstants.acronyms.map((languageItem, index) => (
            <MenuItemStyled
              key={`${languageItem.value}-${index}`}
              value={languageItem.value}
              aria-label={t<string>(
                `header.ariaLabels.languages.${languageItem.value}`
              )}
            >
              {languageItem.acronym}
            </MenuItemStyled>
          ))}
        </SelectStyled>
      </div>
    </HeaderStyled>
  )
}

export default Header
