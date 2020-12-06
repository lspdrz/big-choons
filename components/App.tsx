import React, { useContext, useEffect, useState } from "react";
import Layout from "./Layout";

import Modals from "./modals/Modals";
import { AppContext, AppProvider } from "./AppContext";
import TrackFeed from "./TrackFeed";
import AboutButton from "./AboutButton";
import Spinner from "./Spinner";
import UserAuth from "./auth/UserAuth";
import useJWT from "../hooks/useJWT";

const App = () => {
  const [state, setState] = useContext(AppContext)
  const { getRefreshedToken, user, checkingAuth } = useJWT()

  // Check for refresh token if no current JWT
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (state.jwt === "") {
          await getRefreshedToken()
        } 
      } catch { setState((state: any) => ({...state, checkingAuth: false})) }
    }
    checkAuth()
  }, [])
  
  return (
    <>
      <Modals />
      {
        !checkingAuth
          ?
          <Layout title="Big Choonz">
            {
              user ? <TrackFeed /> : <UserAuth/>
            }
          </Layout>
          :
            <Spinner />
      }
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
