// store.js
import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import usersSlice from "./slices/users-slice"

const makeStore = () => configureStore({
  reducer: {
    usersSlice
  }
})

export const wrapper = createWrapper(makeStore)
