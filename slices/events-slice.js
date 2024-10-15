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
    }
  }
})

export const { fetchEventsList, setEventsList, setEventsError, createEvent, setSelectedEvent  } = eventsSlice.actions
export default eventsSlice.reducer
