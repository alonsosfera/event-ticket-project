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
    },
    createRoom: (state, action) => {
      state.list = [action.payload, ...state.list]
    },
    deleteRoom: (state, action) => {
      state.list = state.list.filter(room => room.id !== action.payload)
    },
    updateRoom: (state, action) => {
      state.list = state.list.map(room => {
        if (room.id === action.payload.id) {
        return action.payload
        }
        return room
      })
    }

  }
})

export const { fetchRoomsList, setRoomsList, createRoom, deleteRoom, updateRoom } = roomsSlice.actions
export default roomsSlice.reducer
