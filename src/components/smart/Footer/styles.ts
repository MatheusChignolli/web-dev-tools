import styled from 'styled-components'

export const FooterStyled = styled.footer`
  padding: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.spacing(3)};

  svg {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  p {
    display: flex;
    align-items: center;
  }
`
