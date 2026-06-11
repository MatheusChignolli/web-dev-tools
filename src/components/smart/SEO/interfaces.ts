import { SEOConstants } from '~constants'

export type SEOPage = keyof typeof SEOConstants.PAGES

export interface SEOProps {
  page: SEOPage
  noindex?: boolean
}
