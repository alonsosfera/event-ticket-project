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
    }
  }
})

export const { fetchEventsList, setEventsList, setEventsError } = eventsSlice.actions
export default eventsSlice.reducer
