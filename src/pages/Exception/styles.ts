import { Container } from '@mui/material'
import styled from 'styled-components'

export const ContainerStyled = styled(Container)`
  text-align: center;
  margin: ${({ theme }) => theme.spacing(8, 0)};
  color: ${({ theme }) => theme.palette.primary.light};
`
