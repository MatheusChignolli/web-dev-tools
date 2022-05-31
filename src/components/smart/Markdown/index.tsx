import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkdownProps } from './interfaces'
import { WrapperStyled } from './styles'
import { useTranslation } from 'react-i18next'

const Markdown = ({ path }: MarkdownProps) => {
  const { t } = useTranslation()
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((md) => {
        setMarkdown(md)
      })
  }, [])

  return (
    <WrapperStyled aria-label={t('components.markdown.section')}>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </WrapperStyled>
  )
}

export default Markdown
