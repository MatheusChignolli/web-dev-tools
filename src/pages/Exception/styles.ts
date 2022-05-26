import styled from 'styled-components'
import { Container } from '~components'

export const ContainerStyled = styled(Container)`
  text-align: center;
  margin: ${({ theme }) => theme.spacing(8, 0)};
  color: ${({ theme }) => theme.palette.primary.light};
`
