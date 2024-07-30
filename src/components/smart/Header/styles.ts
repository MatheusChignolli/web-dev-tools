import { MenuItem, Select } from '@mui/material'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
  padding: ${({ theme }) => theme.spacing(2, 0)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};

  ${({ theme }) => {
    return `${theme.breakpoints.down(
      'sm'
    )} { flex-direction: column; align-items: flex-start; gap: 16px}`
  }}
`

export const SelectStyled = styled(Select)`
  .MuiSelect-select,
  .MuiSelect-select:hover {
    border: none;
    padding-top: ${({ theme }) => theme.spacing(1)};
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 4px;
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-weight: 600;
    padding: ${({ theme }) => theme.spacing(1, 2)};

    &[aria-expanded='false'] {
      border-radius: 4px;
      background-color: ${({ theme }) => theme.palette.primary.main};
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
    font-weight: 600;
    background: ${({ theme }) => theme.palette.primary.main} !important;
  }
`
