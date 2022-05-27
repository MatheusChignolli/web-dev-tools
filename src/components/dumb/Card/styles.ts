import styled, { css } from 'styled-components'
import { CardStyledProps } from './interfaces'

export const CardStyled = styled.div<CardStyledProps>`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.primary.light};
  border-radius: 8px;
  position: relative;

  h2 {
    color: ${({ theme }) => theme.palette.primary.contrastText};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}
`

export const KeysComboStyled = styled.span`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 16px;
  right: 16px;

  div + div {
    margin-left: ${({ theme }) => theme.spacing(1)};
  }
`
