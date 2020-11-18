import React from "react";
import Layout from "./Layout";

import Modals from "./modals/Modals";
import { AppProvider } from "./AppContext";
import TrackFeed from "./TrackFeed";
import AboutButton from "./AboutButton";
import LoginPage from "./LoginPage";

const userAuthenticated = false
const App = () => {
  return (
    <AppProvider>
      <Modals />
      <Layout title="Big Choonz">
        {userAuthenticated ? <TrackFeed /> : <LoginPage />}
      </Layout>
      <AboutButton />
    </AppProvider>
  );
};

export default App;
