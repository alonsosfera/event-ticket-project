import React, { createContext, useContext, useEffect, useState } from "react"

const EventContext = createContext()

export const EventProvider = ({ children }) => {
  const [ selectedEvent, setSelectedEvent ] = useState(null)

  const fetchInitialEventsData = () => {



  }

  useEffect(() => {
    fetchInitialEventsData()
  }, [])

  return (
    <EventContext.Provider value={{ selectedEvent, setSelectedEvent }}>
      {children}
    </EventContext.Provider>
  )
}

export const useEvent = () => useContext(EventContext)