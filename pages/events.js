import { Layout } from "@/components/layout/layout-component"
import EventTable from "@/components/events/event-table-component"
import TableMobile from "@/components/events/event-table-mobile-component"
import { EventProvider } from "@/components/events/event-context"
import { Row, Col } from "antd"
import EventCard from "@/components/events/event-card-component"
export default function EventsPage() {
  return (
    <EventProvider>
      <Layout>
        <Row>
          <Col md={24} xs={0}><EventTable /></Col>
          <Col md={0} xs={24}><TableMobile /></Col>
        </Row>
        <EventCard />
      </Layout>
    </EventProvider>
  )
}