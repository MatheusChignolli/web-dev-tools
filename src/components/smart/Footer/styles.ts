import styled from 'styled-components'

export const FooterStyled = styled.footer`
  padding: ${({ theme }) => theme.spacing(2, 0)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};

  svg {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  p {
    display: flex;
    align-items: center;
  }
`
