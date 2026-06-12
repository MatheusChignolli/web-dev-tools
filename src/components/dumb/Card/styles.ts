import styled from 'styled-components'
import { CardStyledProps } from './interfaces'

export const CardStyled = styled.div<CardStyledProps>`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2.5)};
  background-color: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 12px;
  position: relative;
  height: 100%;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  h2 {
    color: ${({ theme }) => theme.palette.text.primary};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`
