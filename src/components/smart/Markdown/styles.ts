import styled from 'styled-components'

export const WrapperStyled = styled.div`
  ul {
    margin: 0;
    padding: ${({ theme }) => theme.spacing(0, 2.5)};
  }

  a {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`
