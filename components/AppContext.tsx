import React, { createContext, useState } from "react";
import { User } from "../interfaces";

type IAppState = {
  modalId?: String;
  user?: User | null;
  jwt?: String | null;
  checkingAuth?: boolean;
};

type IAppContext = [IAppState, React.Dispatch<React.SetStateAction<IAppState>>];

const AppContext = createContext<IAppContext>([{}, () => null]);

const AppProvider = (props: any) => {
  const [state, setState] = useState<IAppState>({
    modalId: "",
    user: null,
    jwt: "",
    checkingAuth: true,
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
