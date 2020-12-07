import React, { useContext } from 'react'
import { GoogleLogin } from 'react-google-login'
import useJWT from '../../hooks/useJWT'
import { AppState, User } from '../../interfaces'
import { AppContext } from '../AppContext'
import G from '../icons/G'

const CLIENT_ID: string = process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID as string

const GoogleLoginButton: React.FC = () => {
  const [, setState] = useContext(AppContext)

  const { setTokenAndUser } = useJWT()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const login = async (response: any): Promise<void> => {
    if (response.accessToken) {
      setState((state: AppState) => ({ ...state, checkingAuth: true }))
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/google/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: `${response.accessToken}`,
        }),
        credentials: 'include',
      })
      const resJson = await res.json()
      const userData: User = {
        id: resJson.id,
        username: resJson.username,
        name: resJson.name,
        email: resJson.email,
      }
      setTokenAndUser(userData, resJson.access_token, resJson.access_token_expiry)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLoginFailure = (response: any): void => {
    // TODO: replace with javascript logger
    // Then add no console logs in eslint
    console.log('Failed to log in')
    console.log(response)
  }

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login"
      onSuccess={login}
      onFailure={handleLoginFailure}
      cookiePolicy={'single_host_origin'}
      responseType="code,token"
      render={(renderProps) => (
        <button
          className="bg-white flex flex-row content-between shadow p-4 mx-auto mt-8 border border-gray-300 hover:bg-gray-200 focus:bg-gray-100 focus:ring-2"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <G /> <span className="pl-4 leading-8 font-bold">Log in with Google</span>
        </button>
      )}
    />
  )
}
export default GoogleLoginButton
