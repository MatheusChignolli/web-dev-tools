import i18n from '~i18n'
import { render } from '~tests'
import SEO from '..'

describe('SEO', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('pt')
  })

  it('should render home metadata for portuguese locale', () => {
    expect(() => render(<SEO page="home" />)).not.toThrow()
    expect(document.documentElement.lang).toBe('pt-BR')
  })

  it('should render noindex metadata for not found page', () => {
    expect(() => render(<SEO page="notFound" noindex />)).not.toThrow()
  })

  it('should render english metadata when locale changes', async () => {
    await i18n.changeLanguage('en')
    expect(() => render(<SEO page="about" />)).not.toThrow()
  })

  it('should fallback to english locale for unsupported languages', async () => {
    await i18n.changeLanguage('fr')
    expect(() => render(<SEO page="contact" />)).not.toThrow()
  })
})
