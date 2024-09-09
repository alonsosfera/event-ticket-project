import EventButtons from "./owner-events-buttons-component"
import OwnerEventTableMobile from "./owner-events-mobile-table-component"
import OwnerEventsTable from "./owner-events-table-component"
import { Col, Row } from "antd"

const OwnerEventsComponent = () => {
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