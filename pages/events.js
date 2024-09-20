import { Layout } from "@/components/layout/layout-component"
import EventTable from "@/components/host/events/event-table-component"
import TableMobile from "@/components/host/events/event-table-mobile-component"
import { EventProvider } from "@/components/events/event-context"
import { Row, Col } from "antd"
import OwnerEventsComponent from "@/components/owner/owner-events-component"
import { pageAuth } from "@/helpers/page-auth"
import UserRoleEnum from "@/models/user-role-enum"

export default function EventsPage({ user }) {

  const { role } = user

  return (
    <EventProvider>
      <Layout>
        {role === UserRoleEnum.HOST &&
        <Row>
          <Col md={24} xs={0}><EventTable /></Col>
          <Col md={0} xs={24}><TableMobile /></Col>
        </Row>}
        {[UserRoleEnum.OWNER, UserRoleEnum.ADMIN].includes(role) && <OwnerEventsComponent />}
      </Layout>
    </EventProvider>
  )
}

export async function getServerSideProps(context) {
  return pageAuth(context)
}