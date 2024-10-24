import { Col, Row } from "antd"
import DigitalInvitationButtons from "@/components/digital-invitation/digital-invitation-buttons-component"
import DigitalInvitationListComponent from "@/components/digital-invitation/digital-invitation-list-component"
import { useState } from "react"
import InvitationDesign from "@/pages/invitation-design"

const DigitalInvitationComponent = () => {
  const [showNewDesign, setShowNewDesign] = useState(false)

  return (
    <>
      <DigitalInvitationButtons setShowNewDesign={setShowNewDesign} />
      <Row>
        <Col md={24}>
          {showNewDesign ? (
            <InvitationDesign setShowNewDesign ={setShowNewDesign } />
          ) : (
            <DigitalInvitationListComponent />
          )}
        </Col>
      </Row>
    </>
  )
}

export default DigitalInvitationComponent
