import { screen } from '@testing-library/react'
import { render } from '~tests'
import Loader from '..'

describe('Loader', () => {
  it('should render circular progress', () => {
    render(<Loader />)

    expect(
      screen.getByRole('progressbar', {
        name: 'Círculo girando no sentido horário de forma não ordenada representando o carregamento de alguma coisa',
      })
    ).toBeInTheDocument()
  })
})
