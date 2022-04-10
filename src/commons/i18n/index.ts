import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'
import pt from './locales/pt-BR'
import en from './locales/en-US'

i18n.use(detector).use(initReactI18next).init({
  resources: {
    en,
    pt,
  },
})

export default i18n
