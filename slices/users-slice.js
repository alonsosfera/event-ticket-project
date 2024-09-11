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
    }
  }
})

export const { setUsersList, fetchUsersList } = usersSlice.actions
export default usersSlice.reducer
