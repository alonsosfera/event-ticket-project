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
      state.list = [action.payload, ...state.list]
    },
    deleteGuest: (state, action) => {
      state.list = state.list.filter(guest => guest.id !== action.payload)
    },
    updateGuest: (state, action) => {
      state.list = state.list.map(guest => {
        if (guest.id === action.payload.id) {
          return action.payload
        }
        return guest
      })
    }
  }
})

export const { fetchGuestsList, setGuestsList, createGuest, deleteGuest, updateGuest } = guestsSlice.actions
export default guestsSlice.reducer
