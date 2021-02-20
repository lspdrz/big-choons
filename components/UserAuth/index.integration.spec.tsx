import { render, screen } from '@testing-library/react'

import UserAuth from './UserAuth'

describe('UserAuth', () => {
  test('Initial State', () => {
    render(<UserAuth />)

    const googleAuthButton = screen.getByRole('button')
    expect(googleAuthButton).toHaveTextContent('Log in with Google')
  })
})
