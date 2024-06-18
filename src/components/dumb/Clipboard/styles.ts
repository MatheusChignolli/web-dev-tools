import { alpha } from '@mui/material'
import styled from 'styled-components'

export const ClipboardStyled = styled.div`
  background-color: ${({ theme }) => alpha(theme.palette.primary.main, 0.5)};
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 38px;
  max-height: 250px;
  overflow-y: auto;

  .MuiButtonBase-root {
    margin: ${({ theme }) => theme.spacing(0, 0, 0, 1)};
  }
`
