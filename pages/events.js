import { Layout } from "@/components/layout/layout-component"
import EventTable from "@/components/host/events/event-table-component"
import TableMobile from "@/components/host/events/event-table-mobile-component"
import { EventProvider } from "@/components/events/event-context"
import { Row, Col } from "antd"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchEventsList, setEventsList, setEventsError } from "@/slices/events-slice"
import axios from "axios"

export default function EventsPage() {
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
        <Row>
          <Col md={24} xs={0}>
            <EventTable />
          </Col>
          <Col md={0} xs={24}>
            <TableMobile />
          </Col>
        </Row>
      </Layout>
    </EventProvider>
  )
}
