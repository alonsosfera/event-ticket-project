import axios from "axios"
import { Row, Col } from "antd"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { pageAuth } from "@/helpers/page-auth"
import UserRoleEnum from "@/models/user-role-enum"
import { Layout } from "@/components/layout/layout-component"
import { EventProvider } from "@/components/events/event-context"
import EventTable from "@/components/host/events/event-table-component"
import OwnerEventsComponent from "@/components/owner/owner-events-component"
import TableMobile from "@/components/host/events/event-table-mobile-component"
import { fetchEventsList, setEventsList, setEventsError } from "@/slices/events-slice"

export default function EventsPage({ user }) {
  const { role } = user
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEventsList())
    axios.get("/api/events/list")
      .then(({ data }) => {
        dispatch(setEventsList(data))
      })
      .catch(error => {
        dispatch(setEventsError(error.message))
      })
  }, [dispatch])

  return (
    <EventProvider>
      <Layout>
        {role === UserRoleEnum.HOST &&
          <Row>
            <Col md={24} xs={0}><EventTable /></Col>
            <Col md={0} xs={24}><TableMobile /></Col>
          </Row>
        }
        {[UserRoleEnum.OWNER, UserRoleEnum.ADMIN].includes(role) && <OwnerEventsComponent />}
      </Layout>
    </EventProvider>
  )
}

export async function getServerSideProps(context) {
  return pageAuth(context)
}
