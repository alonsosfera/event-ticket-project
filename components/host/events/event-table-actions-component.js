import { Row, Col, Button, Divider } from "antd"
import { FileImageOutlined } from "@ant-design/icons"
import EventHeader from "./event-header-component"
import { useEvent } from "../../events/event-context"
import InvitateGuestModal from "./event-modal-invitations"
import { useState } from "react"
import ConfigInvitationDigital from "@/components/host/events/event-modal-invitation-digital-component"
import ConfigRoomMaps from "@/components/host/events/event-modal-room-maps-component"
import ActionsButtons from "@/components/host/events/event-table-actions-buttons"

const TableActions = () => {
  const { selectedEvent } = useEvent()


  const [isDigitalInvitationModalVisible, setIsDigitalInvitationModalVisible] = useState(false)
  const [isInvitateGuestModalVisible, setIsInvitateGuestModalVisible] = useState(false)
  const [isArrangeGuestsModalVisible, setIsArrangeGuestsModalVisible] = useState(false)

  const handleDigitalInvitation = () => {
    setIsDigitalInvitationModalVisible(true)
  }

  const handleCancelDigitalInvitationModal = () => {
    setIsDigitalInvitationModalVisible(false)
  }

  const handleArrangeGuests = () => {
    setIsArrangeGuestsModalVisible(true)
  }

  const handleCancelArrangeGuestsModal = () => {
    setIsArrangeGuestsModalVisible(false)
  }

  const handleCancelModal = () => {
    setIsInvitateGuestModalVisible(false)
  }

  const handleSubmitModal = values => {
    values
    setIsInvitateGuestModalVisible(false)
  }

  return (
    <>
      <EventHeader selectedEvent={selectedEvent} />
      <Row justify={"end"} gutter={16}>
        <Col>
          <Button
            icon={<FileImageOutlined />}
            onClick={handleDigitalInvitation}>
            Invitación digital
          </Button>
        </Col>
        <Col>
          <Button onClick={handleArrangeGuests}>
            Acomodo de invitados
          </Button>
        </Col>
      </Row>
      <Divider />

      <ActionsButtons  selectedEvent={selectedEvent} />

      <InvitateGuestModal
        visible={isInvitateGuestModalVisible}
        onCancel={handleCancelModal}
        onSubmit={handleSubmitModal} />

      <ConfigInvitationDigital
        visible={isDigitalInvitationModalVisible}
        onCancel={handleCancelDigitalInvitationModal} />

      <ConfigRoomMaps
        isArrangeGuestsModalVisible={isArrangeGuestsModalVisible}
        handleCancelArrangeGuestsModal={handleCancelArrangeGuestsModal} />
    </>
  )
}

export default TableActions