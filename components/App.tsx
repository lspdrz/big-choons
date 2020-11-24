import React, { useContext, useEffect, useState } from "react";
import Layout from "./Layout";

import Modals from "./modals/Modals";
import { AppContext, AppProvider } from "./AppContext";
import TrackFeed from "./TrackFeed";
import AboutButton from "./AboutButton";
import Spinner from "./Spinner";
import UserAuth from "./auth/UserAuth";
import jwtManager from './auth/JWTManager'

const App = () => {
  const [state, setState] = useContext(AppContext)
  const { getRefreshedToken, getToken, getUser } = jwtManager

  // Check for refresh token if no current JWT
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (state.jwt === "") {
          const tokenIsRefreshed = await getRefreshedToken()
          if (tokenIsRefreshed) {
              const user = getUser()
              const jwt = getToken()
              setState((state: any) => ({ ...state, user, jwt, checkingAuth: false }));
          }
          else {
            setState((state: any) => ({...state, checkingAuth: false}))
          }
        } 
      } catch { setState((state: any) => ({...state, checkingAuth: false})) }
    }
    checkAuth()
  }, [])
  
  return (
    <>
      <Modals />
      <Layout title="Big Choonz">
        {
          ! state.checkingAuth
          ?
          state.user ? <TrackFeed /> : <UserAuth/>
          :
          <Spinner />
        }
      </Layout>
      <AboutButton />
    </>
  );
}

const AppIndex = () => {
  return (
    <AppProvider>
      <App/>
    </AppProvider>
  );
};

export default AppIndex;
