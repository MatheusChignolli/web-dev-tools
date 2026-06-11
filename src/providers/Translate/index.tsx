import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useRecoilState } from 'recoil'
import { languageState } from '~states'
import { TranslateProviderProps } from './interfaces'

const TranslateProvider = ({ children }: TranslateProviderProps) => {
  const { i18n } = useTranslation()
  const [language] = useRecoilState(languageState)

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language)
    }
  }, [language, i18n])

  useEffect(() => {
    document.documentElement.lang = i18n.language === 'pt' ? 'pt-BR' : 'en'
  }, [i18n.language])

  return <>{children}</>
}

export default TranslateProvider
