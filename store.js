// store.js
import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import usersSlice from "./slices/users-slice"
import eventsSlice from "@/slices/events-slice"
import guestsSlice from "./slices/guests-slice"
import roomsSlice from "./slices/rooms-slice"

const makeStore = () => configureStore({
  reducer: {
    usersSlice,
    eventsSlice,
    guestsSlice,
    roomsSlice
  }
})

export const wrapper = createWrapper(makeStore)
