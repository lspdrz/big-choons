import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    jwt: null,
    checkingAuth: true,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload.user
      state.jwt = payload.jwt
      state.checkingAuth = false
    },
    removeUser: (state) => {
      state.user = null
      state.jwt = null
      state.checkingAuth = false
    },
    checkAuth: (state) => {
      state.checkingAuth = true
    },
  },
})

export const { setUser, removeUser, checkAuth } = authSlice.actions

export default authSlice.reducer
