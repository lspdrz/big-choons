// import { render, fireEvent, screen } from '@testing-library/react'

// import UserAuth from './UserAuth'

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
//   })
// )

// const mockSuccessResponse = {
//   access_token: 'test_access_token',
// }
// const mockJsonPromise = Promise.resolve(mockSuccessResponse)
// const mockFetchPromise = Promise.resolve({
//   json: () => mockJsonPromise,
// } as Response)

// global.fetch = jest.fn(() -> mockFetchPromise)

// describe('UserAuth', () => {
//   beforeEach(() => {
//     const mockSuccessResponse = {
//       access_token: 'test_access_token',
//     }
//     const mockJsonPromise = Promise.resolve(mockSuccessResponse)
//     const mockFetchPromise = Promise.resolve({
//       json: () => mockJsonPromise,
//     } as Response)
//     jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)
//   })

//   afterEach(() => {
//     jest.restoreAllMocks()
//   })

//   test('Initial State', () => {
//     render(<UserAuth />)

//     const googleAuthButton = screen.getByRole('button')
//     expect(googleAuthButton).toHaveTextContent('Log in with Google')
//   })

//   test('Successful Login', () => {
//     // const mockSuccessResponse = {
//     //   id: 1,
//     //   username: 'johndoe',
//     //   name: 'John Doe',
//     //   email: 'johndoe@test.com',
//     // }

//     render(<UserAuth />)
//     const googleAuthButton = screen.getByRole('button')
//     fireEvent.click(googleAuthButton)
//   })
// })
