import React, { createContext, useState } from "react";

type IAppState = {
  modalId?: String;
};

type IAppContext = [IAppState, React.Dispatch<React.SetStateAction<IAppState>>];

const AppContext = createContext<IAppContext>([{}, () => null]);

const AppProvider = (props: any) => {
  const [state, setState] = useState<IAppState>({
    modalId: "",
  });
  return (
    <AppContext.Provider value={[state, setState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
