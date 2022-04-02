import { ClipboardStyled } from './styles'
import { ClipboardProps } from './interfaces'

const Clipboard = ({ content }: ClipboardProps) => {
  return <ClipboardStyled>{content}</ClipboardStyled>
}

export default Clipboard
