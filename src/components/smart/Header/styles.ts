import styled from 'styled-components'

export const HeaderStyled = styled.header`
  padding: ${({ theme }) => theme.spacing(2, 1)};
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.light};
`
