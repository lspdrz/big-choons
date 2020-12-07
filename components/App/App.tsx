import React, { useContext, useEffect } from 'react'

import AboutButton from 'components/AboutButton'
import { AppContext, AppProvider } from 'components/App/AppContext'
import Home from 'components/Home'
import Spinner from 'components/Icons/Spinner'
import Layout from 'components/Layout'
import Modals from 'components/Modals'
import UserAuth from 'components/UserAuth'
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
        <Layout title="Big Choonz">{user ? <Home /> : <UserAuth />}</Layout>
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
