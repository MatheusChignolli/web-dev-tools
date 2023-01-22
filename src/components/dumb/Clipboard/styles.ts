import styled from 'styled-components'

export const ClipboardStyled = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 26px;

  .MuiButtonBase-root {
    margin: ${({ theme }) => theme.spacing(0, 0, 0, 1)};
  }

  svg {
    font-size: 16px;
  }
`
