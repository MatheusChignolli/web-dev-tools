import { MenuItem, Select } from '@mui/material'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
  padding: ${({ theme }) => theme.spacing(2, 0)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`

export const SelectStyled = styled(Select)`
  .MuiSelect-select,
  .MuiSelect-select:hover {
    border: none;
    padding-top: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.palette.primary.light};
    border-radius: 4px;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    padding: ${({ theme }) => theme.spacing(1, 2)};

    &[aria-expanded='false'] {
      border-radius: 4px;
      background-color: ${({ theme }) => theme.palette.primary.light};
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
  color: ${({ theme }) => theme.palette.primary.contrastText} !important;
  background: ${({ theme }) => theme.palette.primary.light} !important;

  &[aria-selected='true'] {
    background: ${({ theme }) => theme.palette.primary.dark} !important;
  }
`
