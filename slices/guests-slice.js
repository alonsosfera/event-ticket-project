import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
  isLoading: false
}

const guestsSlice = createSlice({
  name: "guestsSlice",
  initialState,
  reducers: {
    fetchGuestsList: state => {
      state.isLoading = true
    },
    setGuestsList: (state, action) => {
      state.isLoading = false
      state.list = action.payload
    },
    createGuest: (state, action) => {
      state.list.push(action.payload)
    },
    deleteGuest: (state, action) => {
      state.list = state.list.filter(guest => guest.id !== action.payload)
    },
    updateGuest: (state, action) => {
      const { id, ...updatedData } = action.payload
      const guestIndex = state.list.findIndex(guest => guest.id === id)
      if (guestIndex !== -1) {
        state.list[guestIndex] = { ...state.list[guestIndex], ...updatedData }
      }
    }
  }
})

export const { fetchGuestsList, setGuestsList, createGuest, deleteGuest, updateGuest } = guestsSlice.actions
export default guestsSlice.reducer
