import { FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useRecoilState } from 'recoil'
import { languageState } from '~states'

const TranslateProvider: FC = ({ children }) => {
  const { i18n } = useTranslation()
  const [language] = useRecoilState(languageState)

  useEffect(() => {
    if (language) {
      i18n.changeLanguage(language)
    }
  }, [language])

  return <>{children}</>
}

export default TranslateProvider
