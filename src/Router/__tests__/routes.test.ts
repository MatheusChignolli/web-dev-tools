import routes from '../routes'

describe('routes', () => {
  const routesLength = 3

  it(`should have ${routesLength} routes`, () => {
    expect(routes).toHaveLength(routesLength)
  })
})
