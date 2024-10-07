import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  list: [],
  userEvents: [],
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
    setUserEventsList: (state, action) => {
      state.userEvents = action.payload
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

export const { fetchEventsList, setEventsList, setUserEventsList, setEventsError, createEvent  } = eventsSlice.actions
export default eventsSlice.reducer
