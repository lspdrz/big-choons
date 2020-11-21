import React, { useContext } from "react";
import Layout from "./Layout";

import Modals from "./modals/Modals";
import { AppContext, AppProvider } from "./AppContext";
import TrackFeed from "./TrackFeed";
import AboutButton from "./AboutButton";
import GoogleLoginButton from "./GoogleLogin";

const App = () => {
  const [state] = useContext(AppContext)
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
