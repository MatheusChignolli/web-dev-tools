import styled from 'styled-components'
import { Container } from '~components'

export const ContainerStyled = styled(Container)`
  background-color: ${({ theme }) => theme.palette.primary.dark};
`
