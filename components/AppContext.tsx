import React, { createContext, useState } from "react";

type AppState = {
  modalId?: String;
};

type AppContextType = [
  AppState,
  React.Dispatch<React.SetStateAction<AppState>>
];

const AppContext = createContext<AppContextType>([{}, () => null]);
// const AppContext = createContext([{}, () => {}]);

const AppProvider = (props: any) => {
  const [state, setState] = useState({
    modalId: "",
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
