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
    updateEvent: (state, action) => {
      state.list = state.list.map(room => {
        if (room.id === action.payload.id) {
          return action.payload
        }
        return room
      })
    }
  }
})

export const { fetchEventsList, setEventsList, setEventsError,createEvent,updateEvent } = eventsSlice.actions
export default eventsSlice.reducer
