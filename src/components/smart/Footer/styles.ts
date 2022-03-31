import styled from 'styled-components'

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(1)};
  margin-top: auto;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`
