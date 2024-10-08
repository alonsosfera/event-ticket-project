import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  list: [],
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
    setEventsError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    createEvent: (state, action) => {
      state.list = [action.payload, ...state.list]
    },
    deleteEvent: (state, action) => {
      state.list = state.list.filter(room => room.id !== action.payload)
    }
  }
})

export const { fetchEventsList, setEventsList, setEventsError,createEvent,deleteEvent } = eventsSlice.actions
export default eventsSlice.reducer
