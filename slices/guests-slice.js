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
      const eventIndex = state.list.findIndex(event =>
        event.guests.some(guest => guest.id === action.payload)
      )
      if (eventIndex !== -1) {
        state.list[eventIndex].guests = state.list[eventIndex].guests.filter(
          guest => guest.id !== action.payload
        )
      }
    },
    updateGuest: (state, action) => {
      const eventIndex = state.list.findIndex(event =>
        event.guests.some(guest => guest.id === action.payload.id)
      )

      if (eventIndex !== -1) {
        state.list[eventIndex].guests = state.list[eventIndex].guests.map(guest =>
          guest.id === action.payload.id ? action.payload : guest
        )
      }
    }
  }
})

export const { fetchGuestsList, setGuestsList, createGuest, deleteGuest, updateGuest } = guestsSlice.actions
export default guestsSlice.reducer
