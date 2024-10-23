import { Col , Row } from "antd"
import DigitalInvitationButtons from "@/components/digital-invitation/digital-invitation-buttons-component"
import DigitalInvitationListComponent from "@/components/digital-invitation/digital-invitation-list-component"


const DigitalInvitationComponent = () => {
  return(
    <>
      <DigitalInvitationButtons />
      <Row>
        <Col md={24}> <DigitalInvitationListComponent /> </Col>
      </Row>
    </>
  )
}

export default DigitalInvitationComponent