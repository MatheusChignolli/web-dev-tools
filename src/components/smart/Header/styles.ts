import { MenuItem, Select } from '@mui/material'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
  padding: ${({ theme }) => theme.spacing(2, 0, 2.5)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.palette.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

  ${({ theme }) => {
    return `${theme.breakpoints.down(
      'sm',
    )} { flex-direction: column; align-items: flex-start; gap: 16px}`
  }}
`

export const SelectStyled = styled(Select)`
  .MuiSelect-select,
  .MuiSelect-select:hover {
    border: 1px solid ${({ theme }) => theme.palette.divider};
    padding-top: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: 8px;
    color: ${({ theme }) => theme.palette.text.primary};
    font-weight: 600;
    padding: ${({ theme }) => theme.spacing(1, 2)};

    &[aria-expanded='false'] {
      border-radius: 8px;
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }

  &::before,
  &:hover::before,
  &::after,
  &:hover::after {
    border: none !important;
  }
`

export const MenuItemStyled = styled(MenuItem)`
  color: ${({ theme }) => theme.palette.text.primary} !important;
  background: ${({ theme }) => theme.palette.background.paper} !important;

  &[aria-selected='true'] {
    font-weight: 600;
    background: ${({ theme }) => theme.palette.background.default} !important;
  }
`
