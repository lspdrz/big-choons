import { createSlice } from '@reduxjs/toolkit'

const modalsSlice = createSlice({
  name: 'modals',
  initialState: {
    selected: '',
  },
  reducers: {
    openModal: (state, action) => {
      state.selected = action.payload
    },
    closeModal: (state) => {
      state.selected = ''
    },
  },
})

export const { openModal, closeModal } = modalsSlice.actions

export default modalsSlice.reducer
