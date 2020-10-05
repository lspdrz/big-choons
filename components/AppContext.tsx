import React, { createContext, useState } from "react";

const AppContext = createContext([{}, () => {}]);

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
