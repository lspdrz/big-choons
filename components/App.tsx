import React from "react";
import Layout from "./Layout";

import Modals from "./modals/Modals";
import { AppProvider } from "./AppContext";
import TrackFeed from "./TrackFeed";
import AboutButton from "./AboutButton";

const App = () => {
  return (
    <AppProvider>
      <Modals />
      <Layout title="Big Choonz">
        <TrackFeed />
      </Layout>
      <AboutButton />
    </AppProvider>
  );
};

export default App;
