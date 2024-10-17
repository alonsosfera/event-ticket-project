import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
  selectedEvent: null,
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
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload
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

export const { fetchGuestsList, setGuestsList, createGuest, deleteGuest, updateGuest, setUserEventsList, setSelectedEvent } = guestsSlice.actions
export default guestsSlice.reducer
