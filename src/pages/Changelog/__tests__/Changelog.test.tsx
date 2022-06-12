import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '~tests'
import mocks from './mocks'
import Changelog from '../'

describe('Changelog', () => {
  it('should render loading while request is running', async () => {
    render(<Changelog />)

    expect(
      screen.getByLabelText(
        'Círculo girando no sentido horário de forma não ordenada representando o carregamento de alguma coisa'
      )
    ).toBeTruthy()
  })

  it('should redirect to 404 page when request returns an empty array', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => mocks.empty,
      })
    ) as any
    render(<Changelog />)

    await waitFor(() => {
      expect(screen.getByText('Sem conteúdo')).toBeTruthy()
    })
  })

  it('should throw error when request fails', async () => {
    const mockConsoleError = jest.fn()
    console.error = mockConsoleError

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => {
          throw new Error('Error')
        },
      })
    ) as any
    render(<Changelog />)

    waitFor(() => {
      expect(mockConsoleError).toBeCalledWith('getReleasesFromRepo: Error')
    })
  })

  describe('when request return and array of releases', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => mocks.releases,
        })
      ) as any
      render(<Changelog />)
    })

    it('should render accordion of releases', async () => {
      await waitFor(() => {
        expect(screen.getAllByLabelText('Componente acordeão')).toHaveLength(2)
      })

      expect(screen.getByText('# v1.0.0')).toBeInTheDocument()
      expect(screen.getByText('# v2.0.0')).toBeInTheDocument()
    })

    it('should collapse accordion when click on it', async () => {
      const accordionItem = await screen.findByText(/31\/12\/2020/)

      expect(accordionItem).toHaveClass('Mui-expanded')

      await waitFor(() => userEvent.click(accordionItem))

      expect(accordionItem).not.toHaveClass('Mui-expanded')

      await waitFor(() => userEvent.click(accordionItem))

      expect(accordionItem).toHaveClass('Mui-expanded')
    })
  })
})
