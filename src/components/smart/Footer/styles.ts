import styled from 'styled-components'

export const FooterStyled = styled.footer`
  padding: ${({ theme }) => theme.spacing(2, 1)};
  border-top: 1px solid ${({ theme }) => theme.palette.primary.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.light};

  svg {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  p {
    display: flex;
    align-items: center;
  }
`
