import FormControlLabel from '@mui/material/FormControlLabel'
import styled from 'styled-components'

export const FormControlLabelStyled = styled(FormControlLabel)`
  color: ${({ theme }) => theme.palette.primary.contrastText};
`
