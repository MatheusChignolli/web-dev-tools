import ReactMarkdown from 'react-markdown'
import { MarkdownProps } from './interfaces'
import { WrapperStyled } from './styles'
import { useTranslation } from 'react-i18next'

const Markdown = ({ body }: MarkdownProps) => {
  const { t } = useTranslation()

  return (
    <WrapperStyled aria-label={t<string>('components.markdown.section')}>
      <ReactMarkdown>{body}</ReactMarkdown>
    </WrapperStyled>
  )
}

export default Markdown
