import { Button, IconButton, SelectChangeEvent, Stack } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useRecoilState } from 'recoil'
import { useTranslation } from 'react-i18next'
import { Link, Logo, Socials } from '~components'
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
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        mr={1}
      >
        <Logo large />
        <Socials />
      </Stack>
      <Stack gap={1} flexDirection="row" alignItems="center">
        <SelectStyled
          variant="standard"
          onChange={handleLanguageSelect}
          value={language}
          aria-label={t<string>('header.ariaLabels.languageSelect')}
          inputProps={{
            'aria-label': t<string>('header.ariaLabels.languageSelectComboBox'),
          }}
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
        <Link.Internal
          aria-label={t<string>('header.ariaLabels.changelog')}
          to="/changelog"
        >
          <Button
            disableElevation
            variant="contained"
            aria-label={t<string>('header.ariaLabels.buttonChangelog')}
          >
            {t<string>('header.links.changelog')}
          </Button>
        </Link.Internal>
        <IconButton
          sx={{ p: 1 }}
          onClick={handleThemeSwitch}
          color="inherit"
          size="small"
          aria-label={t<string>('header.ariaLabels.themeSwitch')}
        >
          {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Stack>
    </HeaderStyled>
  )
}

export default Header
