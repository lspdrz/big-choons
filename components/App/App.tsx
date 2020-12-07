import React, { useContext, useEffect } from 'react'
import Layout from 'components/Layout'

import Modals from 'components/modals/Modals'
import { AppContext, AppProvider } from 'components/AppContext'
import TrackFeed from 'components/TrackFeed'
import AboutButton from 'components/AboutButton'
import Spinner from 'components/Spinner'
import UserAuth from 'components/auth/UserAuth'
import useJWT from 'hooks/useJWT'
import { AppState } from 'interfaces'

const App: React.FC = () => {
  const [, setState] = useContext(AppContext)
  const { getRefreshedToken, user, jwt, checkingAuth } = useJWT()

  // Check for refresh token if no current JWT
  useEffect(() => {
    const checkAuth = async (): Promise<void> => {
      try {
        if (!jwt) {
          await getRefreshedToken()
        } else {
          setState((state: AppState) => ({ ...state, checkingAuth: false }))
        }
      } catch {
        setState((state: AppState) => ({ ...state, checkingAuth: false }))
      }
    }
    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Modals />
      {!checkingAuth ? (
        <Layout title="Big Choonz">{user ? <TrackFeed /> : <UserAuth />}</Layout>
      ) : (
        <Spinner />
      )}
      <AboutButton />
    </>
  )
}

const AppIndex: React.FC = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}

export default AppIndex
