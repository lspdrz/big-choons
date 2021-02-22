import { configureStore } from '@reduxjs/toolkit'

import authReducer from 'components/Auth/authSlice'
import modalsSliceReducer from 'components/Modals/modalsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    modals: modalsSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
