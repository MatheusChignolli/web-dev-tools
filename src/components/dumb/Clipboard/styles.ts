import styled from 'styled-components'

export const ClipboardStyled = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`
