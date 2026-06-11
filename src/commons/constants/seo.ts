const SITE_URL = 'https://todevs.app'

const SEOConstants = {
  SITE_URL,
  SITE_NAME: 'To devs',
  AUTHOR: 'Matheus Chignolli',
  AUTHOR_URL: 'https://www.linkedin.com/in/matheus-chignolli-a0115b155/',
  EMAIL: 'matheuschignolli@gmail.com',
  TWITTER_HANDLE: '@todevsapp',
  OG_IMAGE: `${SITE_URL}/og-image.png`,
  OG_IMAGE_WIDTH: 1200,
  OG_IMAGE_HEIGHT: 630,
  OG_IMAGE_ALT: 'To devs - Document generator for developers and testers',
  THEME_COLOR: '#000000',
  LOCALES: {
    en: 'en_US',
    pt: 'pt_BR',
  },
  HREFLANG: {
    en: 'en',
    pt: 'pt-BR',
    default: 'x-default',
  },
  PAGES: {
    home: { path: '/' },
    about: { path: '/about' },
    contact: { path: '/contact' },
    changelog: { path: '/changelog' },
    termsOfUse: { path: '/terms-of-use' },
    privacyPolicy: { path: '/privacy-policy' },
    notFound: { path: '/404' },
  },
} as const

export default SEOConstants
