import styled, { css } from 'styled-components'
import { Link as MuiLink } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const linkStyle = css`
  color: inherit;
  text-decoration: none;
`

export const MuiLinkStyled = styled(MuiLink)`
  ${linkStyle}
`

export const RouterLinkStyled = styled(RouterLink)`
  ${linkStyle}
`
