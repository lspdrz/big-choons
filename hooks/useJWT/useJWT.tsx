// Referenced this article:
// https://marmelab.com/blog/2020/07/02/manage-your-jwt-react-admin-authentication-in-memory.html

import { removeUser, setUser } from 'components/Auth/authSlice'
import { useAppSelector, useAppDispatch } from 'hooks'
import { User } from 'interfaces'

type useJWTReturnType = {
  checkAuth: () => void
  eraseTokenAndUser: () => void
  setTokenAndUser: (refreshedUser: User, token: string, expiry: string) => void
  jwt: string | null
  user: User | null
  checkingAuth: boolean
  getRefreshedToken: () => void
}

const useJWT = (): useJWTReturnType => {
  const dispatch = useAppDispatch()
  const jwt = useAppSelector((state) => state.auth.jwt)
  const user = useAppSelector((state) => state.auth.user)
  const checkingAuth = useAppSelector((state) => state.auth.checkingAuth)

  const logoutEventName = 'big-choons-logout'
  let refreshTimeOutId: number

  // This listener allows to disconnect another session started in another tab
  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (event) => {
      if (event.key === logoutEventName) {
        dispatch(removeUser())
      }
    })
  }

  const checkAuth = async (): Promise<void> => {
    try {
      if (!jwt) {
        await getRefreshedToken()
      } else {
        dispatch(removeUser())
      }
    } catch {
      dispatch(removeUser())
    }
  }

  // This countdown feature is used to renew the JWT in a way that is transparent to the user.
  // before it's no longer valid
  const refreshToken = (delay: number): void => {
    refreshTimeOutId = window.setTimeout(getRefreshedToken, delay * 1000 - 5000) // Validity period of the token in seconds, minus 5 seconds
  }

  const abortRefreshToken = (): void => {
    if (refreshTimeOutId) {
      window.clearTimeout(refreshTimeOutId)
    }
  }

  // The method makes a call to the refresh-token endpoint
  // If there is a valid cookie, the endpoint will return a fresh jwt.
  const getRefreshedToken = async (): Promise<void> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/token/refresh/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    if (res.status !== 200) {
      eraseTokenAndUser()
    } else {
      const resJson = await res.json()
      const refreshedUser: User = {
        id: resJson.id,
        username: resJson.username,
        name: resJson.name,
        email: resJson.email,
      }
      if (resJson.access_token) {
        setTokenAndUser(refreshedUser, resJson.access_token, resJson.access_token_expiry)
      }
    }
  }

  const setTokenAndUser = (refreshedUser: User, token: string, expiry: string): void => {
    dispatch(
      setUser({
        user: refreshedUser,
        jwt: token,
      })
    )
    const startDate = new Date()
    const endDate = new Date(parseInt(expiry) * 1000)
    const delay = (endDate.getTime() - startDate.getTime()) / 1000
    refreshToken(delay)
  }

  const eraseTokenAndUser = (): void => {
    dispatch(removeUser())
    abortRefreshToken()
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(logoutEventName, Date.now().toString())
    }
  }

  return {
    checkAuth,
    eraseTokenAndUser,
    setTokenAndUser,
    jwt,
    user,
    checkingAuth,
    getRefreshedToken,
  }
}

export default useJWT
