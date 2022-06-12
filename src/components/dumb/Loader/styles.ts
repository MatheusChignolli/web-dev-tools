import styled from 'styled-components'

export const WrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(10)};
`
