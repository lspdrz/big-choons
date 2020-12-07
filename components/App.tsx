import React, { useContext, useEffect } from 'react'
import Layout from './Layout'

import Modals from './modals/Modals'
import { AppContext, AppProvider } from './AppContext'
import TrackFeed from './TrackFeed'
import AboutButton from './AboutButton'
import Spinner from './Spinner'
import UserAuth from './auth/UserAuth'
import useJWT from '../hooks/useJWT'
import { AppState } from '../interfaces'

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
