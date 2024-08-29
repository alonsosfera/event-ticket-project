import React, { createContext, useContext, useEffect, useState } from "react"

const EventContext = createContext()

export const EventProvider = ({ children }) => {
  const [ selectedEvent, setSelectedEvent ] = useState(null)
  const [ eventData, setEventData ] = useState([])

  const fetchInitialEventsData = () => {
    const initialEventData = [
      {
        title: "Fiesta de cumpleaños de Julia",
        date: "15/06/2023",
        location: "Centro de eventos Alpha",
        totalInvites: "312",
        remainingInvites: "117"
      },
      {
        title: "Aniversario de empresa",
        date: "22/09/2023",
        location: "Hotel Plaza",
        totalInvites: "467",
        remainingInvites: "214"
      },
      {
        title: "Conferencia de tecnología",
        date: "08/11/2023",
        location: "Salón la joya",
        totalInvites: "230",
        remainingInvites: "78"
      },
      {
        title: "Boda Amanda y Dante",
        date: "30/04/2023",
        location: "Auditorio Beta",
        totalInvites: "521",
        remainingInvites: "166"
      }
    ]
    setEventData(initialEventData)
  }

  useEffect(() => {
    fetchInitialEventsData()
  }, [])

  return (
    <EventContext.Provider value={{ selectedEvent, setSelectedEvent, eventData, setEventData }}>
      {children}
    </EventContext.Provider>
  )
}

export const useEvent = () => useContext(EventContext)