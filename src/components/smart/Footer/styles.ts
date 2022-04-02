import styled from 'styled-components'

export const FooterStyled = styled.footer`
  padding: ${({ theme }) => theme.spacing(2, 1)};
  border-top: 1px solid ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.palette.secondary.main};

  svg {
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  p {
    display: flex;
    align-items: center;
  }
`
