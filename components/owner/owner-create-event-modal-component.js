import React from "react"
import { Button, Modal, Form, Input, DatePicker } from "antd"

const EventModal = ({ visible, onCancel, onSubmit }) => {
  const handleSubmit = values => {
    values
    onSubmit()
    onCancel()
  }

  return (
    <Modal
      className="modal-new-event"
      title={
        <div className="title-modal">
          Nuevo evento
        </div>
      }
      open={visible}
      centered
      onCancel={onCancel}
      footer={null}
      width={500}>
      <Form
        requiredMark={false}
        className="form-recovery"
        layout="vertical"
        autoComplete="off"
        onFinish={handleSubmit}>
        <Form.Item
          name="eventName"
          label="Nombre del evento"
          rules={[{ required: true, message: "Por favor ingresa el nombre del evento" }]}
          colon={false}>
          <Input placeholder="Nombre del evento" />
        </Form.Item>

        <Form.Item
          name="host"
          label="Anfitrión"
          rules={[{ required: true, message: "Por favor ingresa el nombre del anfitrión" }]}
          colon={false}>
          <Input placeholder="Anfitrión" />
        </Form.Item>

        <Form.Item
          name="eventType"
          label="Tipo de evento"
          rules={[{ required: true, message: "Por favor ingresa el tipo de evento" }]}
          colon={false}>
          <Input placeholder="Tipo de evento" />
        </Form.Item>

        <Form.Item
          name="date"
          label="Fecha"
          rules={[{ required: true, message: "Por favor selecciona una fecha" }]}
          colon={false}>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="guests"
          label="Invitados"
          rules={[{ required: true, message: "Por favor ingresa el número de invitados" }]}
          colon={false}>
          <Input placeholder="Número de invitados" type="number" />
        </Form.Item>

        <Form.Item
          name="tableArrangement"
          label="Acomodo de mesas"
          rules={[{ required: true, message: "Por favor ingresa el acomodo de mesas" }]}
          colon={false}>
          <Input placeholder="Acomodo de mesas" />
        </Form.Item>

        <Form.Item
          name="venue"
          label="Salón"
          rules={[{ required: true, message: "Por favor ingresa el nombre del salón" }]}
          colon={false}>
          <Input placeholder="Salón" />
        </Form.Item>

        <Form.Item
          name="passDesign"
          label="Diseño de pase"
          rules={[{ required: true, message: "Por favor ingresa el diseño de pase" }]}
          colon={false}>
          <Input placeholder="Diseño de pase" />
        </Form.Item>

        <Form.Item>
          <div className="content-buttons">
            <Button type="default" onClick={onCancel}>
              Cancelar
            </Button>
            <Button htmlType="submit" type="primary">
              Crear evento
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EventModal
