import styled from 'styled-components'
import { CardStyledProps } from './interfaces'

export const CardStyled = styled.div<CardStyledProps>`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-radius: 4px;
  position: relative;

  h2 {
    color: ${({ theme }) => theme.palette.primary.main};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`
