import { render, screen } from '@testing-library/react'
import styled from 'styled-components'
import ThemeProvider from '../ThemeProvider'

const DivStyled = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
`

describe('ThemeProvider', () => {
  it('should render children passing material ui theme to styled-component', () => {
    render(
      <ThemeProvider>
        <DivStyled data-testid="styled-component" />
      </ThemeProvider>
    )

    const styledComponent = screen.getByTestId('styled-component')

    expect(styledComponent).toHaveStyle('background-color: rgb(2, 13, 66)')
  })
})
