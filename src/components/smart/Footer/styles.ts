import styled from 'styled-components'

export const FooterStyled = styled.footer`
  padding: ${({ theme }) => theme.spacing(2, 0)};
  border-top: 1px solid ${({ theme }) => theme.palette.primary.contrastText};
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
