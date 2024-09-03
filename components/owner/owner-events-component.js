import EventButtons from "./owner-events-buttons-component"
import OwnerEventTableMobile from "./owner-events-mobile-table-component"
import OwnerEventsTable from "./owner-events-table-component"
import { Col } from "antd"

const OwnerEventsComponent = () => {
  return (
    <div>
      <EventButtons />
      <Col xs={0} md={24}><OwnerEventsTable /></Col>
      <Col xs={24} md={0}><OwnerEventTableMobile /></Col>
    </div>
  )
}

export default OwnerEventsComponent