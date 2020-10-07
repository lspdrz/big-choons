import React from "react";
import Layout from "./Layout";
import SharedTrack from "./SharedTrack";
import ProfileHead from "./ProfileHead";
import Modals from "./modals/Modals";
import { AppProvider } from "./AppContext";
import { User } from "../interfaces";

type Props = {
  users: User[];
};
const App = ({ users }: Props) => {
  console.log("here are all the users");
  console.log(users);
  return (
    <AppProvider>
      <Modals />
      <Layout title="Big Choonz">
        {/* Put the profile header component here to test it out */}
        <ProfileHead />
        <SharedTrack />
        <SharedTrack />
        <SharedTrack />
        <SharedTrack />
        <SharedTrack />
      </Layout>
    </AppProvider>
  );
};

export default App;
