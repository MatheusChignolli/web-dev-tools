import { ChangeEvent, useMemo } from 'react'
import { SelectChangeEvent } from '@mui/material'
import { useRecoilState } from 'recoil'
import { useTranslation } from 'react-i18next'
import { Switch, Typography, Link } from '~components'
import { Languages } from '~interfaces/languages'
import { languageState, themeState } from '~states'
import { LanguagesConstants } from '~constants'
import { HeaderStyled, SelectStyled, MenuItemStyled } from './styles'

const Header = () => {
  const { t } = useTranslation()
  const [theme, setTheme] = useRecoilState(themeState)
  const [language, setLanguage] = useRecoilState(languageState)

  const handleThemeSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setTheme(checked ? 'dark' : 'light')
  }

  const handleLanguageSelect = (event: SelectChangeEvent<unknown>) => {
    const selectedLanguage = event.target.value as Languages
    setLanguage(selectedLanguage)
  }

  const switchChecked = useMemo(() => theme === 'dark', [theme])

  return (
    <HeaderStyled aria-label={t('header.ariaLabels.section')}>
      <Link.Internal to="/">
        <Typography variant="h5">{t('header.title')}</Typography>
      </Link.Internal>
      <div>
        <Switch
          onChange={handleThemeSwitch}
          color="default"
          checked={switchChecked}
          aria-label={t('header.ariaLabels.themeSwitch')}
        />
        <SelectStyled
          variant="filled"
          onChange={handleLanguageSelect}
          value={language}
          aria-label={t('header.ariaLabels.languageSelect')}
        >
          {LanguagesConstants.acronyms.map((languageItem, index) => (
            <MenuItemStyled
              key={`${languageItem.value}-${index}`}
              value={languageItem.value}
              aria-label={t(`header.ariaLabels.languages.${languageItem.value}`)}
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
