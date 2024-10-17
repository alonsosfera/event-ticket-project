import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: [],
  isLoading: false
}

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    fetchUsersList: state => {
      state.isLoading = true
    },
    setUsersList: (state, action) => {
      state.isLoading = false
      state.list = action.payload
    },
    createUser: (state, action) => {
      state.list = [action.payload, ...state.list]
    },
    updateUser: (state, action) => {
      state.list = state.list.map(user => {
        if (user.id === action.payload.id) {
          return action.payload
        }
        return user
      })},
    deleteUser: (state, action) => {
      state.list = state.list.filter(room => room.id !== action.payload)
    }
  }
})

export const { setUsersList, fetchUsersList, createUser, deleteUser,updateUser } = usersSlice.actions
export default usersSlice.reducer
