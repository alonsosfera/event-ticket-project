import EventButtons from "./owner-events-buttons-component"
import OwnerEventTableMobile from "./owner-events-mobile-table-component"
import OwnerEventsTable from "./owner-events-table-component"
import { Col, Row } from "antd"
import { useDispatch , useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchEventsList , setEventsError , setEventsList } from "@/slices/events-slice"
import axios from "axios"
import { fetchUsersList , setUsersList } from "@/slices/users-slice"
import { pageAuth } from "@/helpers/page-auth"
import UserRoleEnum from "@/models/user-role-enum"

const OwnerEventsComponent = ({ user }) => {
  const dispatch = useDispatch()
  const events = useSelector(state => state.eventsSlice.list)
  const users = useSelector(state => state.usersSlice.list)

  useEffect(() => {
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

    if (!users.length) {
      dispatch(fetchUsersList())
      axios.get(`/api/users/list?tenantId=${user.tenants[0]?.id}`)
        .then(({ data }) => {
          dispatch(setUsersList(data.users))
        })
        .catch(error => {
          console.error("Error obteniendo usuarios:", error.message)
        })
    }
  }, [dispatch, events, users, user])

  return (
    <>
      <EventButtons />
      <Row>
        <Col xs={0} md={24}><OwnerEventsTable /></Col>
        <Col xs={24} md={0}><OwnerEventTableMobile /></Col>
      </Row>
    </>
  )
}

export default OwnerEventsComponent

export async function getServerSideProps(context) {
  return pageAuth(context, [UserRoleEnum.OWNER, UserRoleEnum.ADMIN])
}