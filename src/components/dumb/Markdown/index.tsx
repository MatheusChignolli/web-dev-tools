import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { MarkdownProps } from './interfaces'
import { WrapperStyled } from './styles'

const Markdown = ({ path }: MarkdownProps = { path: '' }) => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((md) => {
        setMarkdown(md)
      })
  }, [])

  return (
    <WrapperStyled>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </WrapperStyled>
  )
}

export default Markdown
