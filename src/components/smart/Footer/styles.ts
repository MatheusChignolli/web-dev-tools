import styled from 'styled-components'

export const FooterStyled = styled.footer`
  padding: ${({ theme }) => theme.spacing(3, 0, 2)};
  margin-top: ${({ theme }) => theme.spacing(8)};
  color: ${({ theme }) => theme.palette.text.secondary};
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  svg {
    color: ${({ theme }) => theme.palette.text.primary};
  }

  p {
    display: flex;
    align-items: center;
  }
`
