import EventButtons from "./owner-events-buttons-component"
import OwnerEventTableMobile from "./owner-events-mobile-table-component"
import OwnerEventsTable from "./owner-events-table-component"
import { Col, Row } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { useEffect , useState } from "react"
import { fetchEventsList, setEventsError, setEventsList } from "@/slices/events-slice"
import axios from "axios"
import { fetchUsersList, setUsersList } from "@/slices/users-slice"
import { useSession } from "next-auth/react"
import { fetchRoomsList , setRoomsList } from "@/slices/rooms-slice"

const OwnerEventsComponent = () => {
  const { data: session, status } = useSession()
  const userTenantId = session?.user?.tenants[0]?.id

  const dispatch = useDispatch()
  const events = useSelector(state => state.eventsSlice.list)
  const users = useSelector(state => state.usersSlice.list)
  const rooms = useSelector(state => state.roomsSlice.list)
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    if (status === "authenticated") {
      if (!events.length) {
        dispatch(fetchEventsList())
        axios.get("/api/events/list")
          .then(({ data }) => {
            dispatch(setEventsList(data))
          })
          .catch(error => {
            dispatch(setEventsError(error.message))
          })
      }

      if (!users.length && userTenantId) {
        dispatch(fetchUsersList())
        axios.get(`/api/users/list?tenantId=${userTenantId}`)
          .then(({ data }) => {
            dispatch(setUsersList(data.users))
          })
          .catch(error => {
            console.error("Error obteniendo usuarios:", error.message)
          })
      }

      if (!rooms.length) {
        dispatch(fetchRoomsList())
        axios.get("/api/event-halls/list")
          .then(({ data }) => {
            dispatch(setRoomsList(data))
          })
          .catch(error => {
            console.error("Error obteniendo habitaciones:", error.message)
          })
      }
    }
  }, [status, dispatch, events, users, rooms, userTenantId])


  return (
    <>
      <EventButtons onSearch={setSearchText} />
      <Row>
        <Col xs={0} md={24}><OwnerEventsTable searchText={searchText} /></Col>
        <Col xs={24} md={0}><OwnerEventTableMobile /></Col>
      </Row>
    </>
  )
}

export default OwnerEventsComponent
