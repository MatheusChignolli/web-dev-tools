import styled from 'styled-components'

export const KeycapStyled = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 32px;
  min-width: 30px;
  width: fit-content;
  padding: ${({ theme }) => theme.spacing(0, 0.5)};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  box-shadow: 0 2px 0 ${({ theme }) => theme.palette.divider};
  color: ${({ theme }) => theme.palette.text.primary};
  background: ${({ theme }) => theme.palette.background.default};
  font-size: 0.85rem;
`
