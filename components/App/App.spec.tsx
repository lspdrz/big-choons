import renderer from 'react-test-renderer'

import AppIndex from 'components/App'

describe('App Index page', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<AppIndex />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
