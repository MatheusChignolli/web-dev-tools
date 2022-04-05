import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'
import pt from './pt-BR'
import en from './en-US'

i18n.use(detector).use(initReactI18next).init({
  resources: {
    en,
    pt,
  },
  lng: 'pt',
})

export default i18n
