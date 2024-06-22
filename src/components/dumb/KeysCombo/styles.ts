import styled from 'styled-components'

export const KeysComboStyled = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 4px 6px 8px 6px;

  div + div {
    margin-left: ${({ theme }) => theme.spacing(1.5)};
  }
`
