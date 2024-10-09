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
    setUserEventsList: (state, action) => {
      state.isLoading = false
      state.list = action.payload
    },
    createGuest: (state, action) => {
      const eventIndex = state.list.findIndex(event => event.id === action.payload.eventId)
      if (eventIndex !== -1) {
        state.list[eventIndex].guests = [
          ...state.list[eventIndex].guests,
          action.payload
        ]
      }
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

export const { fetchGuestsList, setGuestsList, createGuest, deleteGuest, updateGuest, setUserEventsList } = guestsSlice.actions
export default guestsSlice.reducer
