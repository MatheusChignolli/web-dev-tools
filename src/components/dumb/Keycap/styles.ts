import styled from 'styled-components'

export const KeycapStyled = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 32px;
  min-width: 30px;
  width: fit-content;
  padding: ${({ theme }) => theme.spacing(0, 0.5)};
  border-radius: 3px;
  box-shadow: 0 3px 0px 4px ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background: ${({ theme }) => theme.palette.primary.main};
`
