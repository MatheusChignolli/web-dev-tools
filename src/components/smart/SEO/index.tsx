import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { SEOConstants } from '~constants'
import { SEOProps } from './interfaces'

const buildBreadcrumbJsonLd = (
  page: SEOProps['page'],
  title: string,
  url: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: SEOConstants.SITE_NAME,
      item: SEOConstants.SITE_URL,
    },
    ...(page !== 'home'
      ? [
          {
            '@type': 'ListItem',
            position: 2,
            name: title,
            item: url,
          },
        ]
      : []),
  ],
})

const buildWebPageJsonLd = (title: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url,
  isPartOf: {
    '@type': 'WebSite',
    name: SEOConstants.SITE_NAME,
    url: SEOConstants.SITE_URL,
  },
})

const buildWebsiteJsonLd = (description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SEOConstants.SITE_NAME,
  alternateName: 'To devs app',
  url: SEOConstants.SITE_URL,
  description,
  inLanguage: ['en-US', 'pt-BR'],
  publisher: {
    '@type': 'Organization',
    name: SEOConstants.SITE_NAME,
    url: SEOConstants.SITE_URL,
    logo: `${SEOConstants.SITE_URL}/logo192.png`,
    email: SEOConstants.EMAIL,
    sameAs: [
      'https://github.com/matheuschignolli',
      'https://www.linkedin.com/in/matheus-chignolli-a0115b155/',
    ],
  },
})

const buildWebApplicationJsonLd = (description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: SEOConstants.SITE_NAME,
  url: SEOConstants.SITE_URL,
  description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'CPF generator',
    'CNPJ generator',
    'RG generator',
    'Masked and unmasked document generation',
    'Batch document generation',
  ],
  author: {
    '@type': 'Person',
    name: SEOConstants.AUTHOR,
    url: SEOConstants.AUTHOR_URL,
  },
})

const SEO = ({ page, noindex = false }: SEOProps) => {
  const { t, i18n } = useTranslation()
  const path = SEOConstants.PAGES[page].path
  const canonicalUrl = `${SEOConstants.SITE_URL}${path === '/' ? '' : path}`
  const title = t<string>(`seo.pages.${page}.title`)
  const description = t<string>(`seo.pages.${page}.description`)
  const keywords = t<string>('seo.keywords')
  const locale =
    SEOConstants.LOCALES[i18n.language as keyof typeof SEOConstants.LOCALES] ??
    SEOConstants.LOCALES.en
  const alternateLocale =
    i18n.language === 'pt' ? SEOConstants.LOCALES.en : SEOConstants.LOCALES.pt
  const robotsContent = noindex
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

  const jsonLd = [
    buildWebPageJsonLd(title, description, canonicalUrl),
    buildBreadcrumbJsonLd(page, title, canonicalUrl),
    ...(page === 'home'
      ? [buildWebsiteJsonLd(description), buildWebApplicationJsonLd(description)]
      : []),
  ]

  return (
    <Helmet htmlAttributes={{ lang: i18n.language === 'pt' ? 'pt-BR' : 'en' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SEOConstants.AUTHOR} />
      <meta name="creator" content={SEOConstants.AUTHOR} />
      <meta name="application-name" content={SEOConstants.SITE_NAME} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      <link
        rel="alternate"
        hrefLang={SEOConstants.HREFLANG.en}
        href={canonicalUrl}
      />
      <link
        rel="alternate"
        hrefLang={SEOConstants.HREFLANG.pt}
        href={canonicalUrl}
      />
      <link
        rel="alternate"
        hrefLang={SEOConstants.HREFLANG.default}
        href={canonicalUrl}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SEOConstants.SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={locale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      <meta property="og:image" content={SEOConstants.OG_IMAGE} />
      <meta
        property="og:image:width"
        content={String(SEOConstants.OG_IMAGE_WIDTH)}
      />
      <meta
        property="og:image:height"
        content={String(SEOConstants.OG_IMAGE_HEIGHT)}
      />
      <meta property="og:image:alt" content={SEOConstants.OG_IMAGE_ALT} />
      <meta property="og:email" content={SEOConstants.EMAIL} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SEOConstants.OG_IMAGE} />
      <meta name="twitter:image:alt" content={SEOConstants.OG_IMAGE_ALT} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}

export default SEO
