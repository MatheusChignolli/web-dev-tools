import routes from '../routes'

describe('routes', () => {
  const routesLength = 8

  it(`should have ${routesLength} routes`, () => {
    expect(routes).toHaveLength(routesLength)
  })
})
