import React, { useContext, useEffect } from "react";
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
    console.log('hi from useEffect in App')
    const checkAuth = async () => {
      if (state.jwt === "") {
        console.log("here in no jwt conditional")
        const tokenIsRefreshed = await getRefreshedToken()
        if (tokenIsRefreshed) {
            const user = getUser()
            const jwt = getToken()
            setState((state: any) => ({ ...state, user, jwt }));
        }
      }
    }
    checkAuth()
  }, [])


  console.log('hi from app')
  console.log(state)

  return (
    <>
      <Modals />
      <Layout title="Big Choonz">
        {state.user ? <TrackFeed /> : <UserAuth/>}
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
