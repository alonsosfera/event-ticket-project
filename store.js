// store.js
import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import usersSlice from "./slices/users-slice"
import eventsSlice from "@/slices/events-slice"

const makeStore = () => configureStore({
  reducer: {
    usersSlice,
    eventsSlice
  }
})

export const wrapper = createWrapper(makeStore)
