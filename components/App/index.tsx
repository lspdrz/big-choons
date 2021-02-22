import React from 'react'
import { Provider } from 'react-redux'

import App from './App'

import store from 'components/store'

const AppIndex: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppIndex
