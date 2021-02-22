import React, { useEffect } from 'react'

import AboutButton from 'components/AboutButton'
import Auth from 'components/Auth'
import Home from 'components/Home'
import Spinner from 'components/Icons/Spinner'
import Layout from 'components/Layout'
import Modals from 'components/Modals'
import useJWT from 'hooks/useJWT'

const App: React.FC = () => {
  const { checkAuth, user, checkingAuth } = useJWT()

  useEffect(() => {
    checkAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Modals />
      {!checkingAuth ? (
        <Layout title="Big Choonz">{user ? <Home /> : <Auth />}</Layout>
      ) : (
        <Spinner />
      )}
      <AboutButton />
    </>
  )
}

export default App
