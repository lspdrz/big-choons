import React from "react";
import Layout from "./Layout";
import ProfileHead from "./ProfileHead";
import Modals from "./modals/Modals";
import { AppProvider } from "./AppContext";
import TrackFeed from "./TrackFeed";

const App = () => {
  return (
    <AppProvider>
      <Modals />
      <Layout title="Big Choonz">
        {/* Put the profile header component here to test it out */}
        <ProfileHead />
        <TrackFeed />
      </Layout>
    </AppProvider>
  );
};

export default App;
