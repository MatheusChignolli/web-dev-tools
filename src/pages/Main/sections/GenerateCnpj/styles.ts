import styled from 'styled-components'
import { IconButton } from '~components'

export const IconButtonStyled = styled(IconButton)`
  margin: ${({ theme }) => theme.spacing(0, 1, 0, 0)} !important;
  background: ${({ theme }) => theme.palette.primary.dark} !important;
  color: ${({ theme }) => theme.palette.primary.contrastText} !important;

  &:hover {
    background: ${({ theme }) => theme.palette.primary.main} !important;
  }
`
