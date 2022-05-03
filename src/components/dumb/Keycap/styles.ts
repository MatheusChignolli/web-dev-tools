import styled from 'styled-components'

export const KeycapStyled = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 22px;
  min-width: 24px;
  width: fit-content;
  padding: ${({ theme }) => theme.spacing(0, 0.5)};
  border-radius: 2px;
  box-shadow: 0 2px 0 3px ${({ theme }) => theme.palette.primary.dark};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background: ${({ theme }) => theme.palette.primary.main};
`
