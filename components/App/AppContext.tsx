import React, { createContext, useState } from 'react'
import { AppState } from 'interfaces'

type IAppContext = [AppState, React.Dispatch<React.SetStateAction<AppState>>]

const AppContext = createContext<IAppContext>([
  { modalId: '', user: null, jwt: null, checkingAuth: true },
  () => null,
])

const AppProvider: React.FC = (props: { children?: React.ReactNode }) => {
  const [state, setState] = useState<AppState>({
    modalId: '',
    user: null,
    jwt: null,
    checkingAuth: true,
  })
  return <AppContext.Provider value={[state, setState]}>{props.children}</AppContext.Provider>
}

export { AppContext, AppProvider }
