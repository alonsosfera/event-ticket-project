import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
  isLoading: false
}

const roomsSlice = createSlice({
  name: "roomsSlice",
  initialState,
  reducers: {
    fetchRoomsList: state => {
      state.isLoading = true
    },
    setRoomsList: (state, action) => {
      state.isLoading = false
      state.list = action.payload
    }
  }
})

export const { fetchRoomsList, setRoomsList } = roomsSlice.actions
export default roomsSlice.reducer
