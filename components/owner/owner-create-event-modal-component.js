import React from "react"
import { Modal, Typography } from "antd"
import EventForm from "@/components/owner/owner-event-form-modal-component"

const { Title } = Typography

const EventModal = ({ visible, onCancel, eventToEdit }) => {
  return (
    <Modal
      title={<Title level={3}>{eventToEdit ? "Editar evento" : "Nuevo evento"}</Title>}
      open={visible}
      centered
      onCancel={onCancel}
      footer={null}
      width={500}>

      <EventForm eventToEdit={eventToEdit} onCancel={onCancel} />
    </Modal>
  )
}

export default EventModal
