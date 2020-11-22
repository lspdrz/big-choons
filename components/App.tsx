import React, { useContext, useEffect } from "react";
import Layout from "./Layout";

import Modals from "./modals/Modals";
import { AppContext, AppProvider } from "./AppContext";
import TrackFeed from "./TrackFeed";
import AboutButton from "./AboutButton";
import GoogleLoginButton from "./auth/GoogleLogin";

const App = () => {
  const [state, setState] = useContext(AppContext)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setState((state: any) => ({ ...state, user: user }));
    }
  }, [])

  return (
    <>
      <Modals />
      <Layout title="Big Choonz">
        {state.user ? <TrackFeed /> : <GoogleLoginButton/>}
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
