import { Button, IconButton, SelectChangeEvent, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useRecoilState } from 'recoil'
import { useTranslation } from 'react-i18next'
import { Link, Logo } from '~components'
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
      <Logo large />
      <Stack gap={1} flexDirection="row" alignItems="center">
        <Link.Internal
          aria-label={t<string>('header.ariaLabels.changelog')}
          to="/changelog"
        >
          <Button
            variant="outlined"
            aria-label={t<string>('header.ariaLabels.buttonChangelog')}
          >
            {t<string>('header.links.changelog')}
          </Button>
        </Link.Internal>
        <Link.External
          href="https://github.com/MatheusChignolli/web-dev-tools"
          underline="none"
          color="inherit"
          aria-label={t<string>('header.ariaLabels.repositoryLink')}
          target="_blank"
        >
          <IconButton
            sx={{ p: 1 }}
            color="inherit"
            aria-label={t<string>('header.ariaLabels.repositoryLinkButton')}
          >
            <GitHubIcon aria-label={t<string>('icons.ariaLabels.github')} />
          </IconButton>
        </Link.External>
        <IconButton
          sx={{ p: 1 }}
          onClick={handleThemeSwitch}
          color="inherit"
          aria-label={t<string>('header.ariaLabels.themeSwitch')}
        >
          {theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
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
      </Stack>
    </HeaderStyled>
  )
}

export default Header
