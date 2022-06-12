import styled from 'styled-components'

export const WrapperStyled = styled.div`
  ul {
    margin: 0;
    padding: ${({ theme }) => theme.spacing(0, 2.5)};
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: none;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1rem;
    margin: ${({ theme }) => theme.spacing(1, 0)};
  }

  h4 {
    font-size: 0.8rem;
    margin: ${({ theme }) => theme.spacing(1, 0)};
  }
`
