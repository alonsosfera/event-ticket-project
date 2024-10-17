import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  list: [],
  selectedEvent: null,
  isLoading: false
}

const eventsSlice = createSlice({
  name: "eventsSlice",
  initialState,
  reducers: {
    fetchEventsList: state => {
      state.isLoading = true
      state.error = null
    },
    setEventsList: (state, action) => {
      state.isLoading = false
      state.list = action.payload
    },
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload
    },
    setEventsError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    createEvent: (state, action) => {
      state.list = [action.payload, ...state.list]
    },
    updateEvent: (state, action) => {
      state.list = state.list.map(event => {
        if (event.id === action.payload.id) {
          return action.payload
        }
        return event
      })},
    deleteEvent: (state, action) => {
      state.list = state.list.filter(room => room.id !== action.payload)
    }
  }
})

export const { fetchEventsList, setEventsList, setEventsError, createEvent, setSelectedEvent, deleteEvent, updateEvent } = eventsSlice.actions
export default eventsSlice.reducer
