import styled from 'styled-components'

export const ClipboardStyled = styled.div`
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 50px;
  max-height: 250px;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.palette.background.paper};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.primary.main};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.palette.primary.dark};
  }
`
