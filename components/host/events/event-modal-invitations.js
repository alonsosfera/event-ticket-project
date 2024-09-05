import React from "react"
import { Button, Modal, Form, Input, Flex } from "antd"
import Title from "antd/es/typography/Title"

const InvitateGuestModal = ({ visible, onCancel, onSubmit }) => {
  const handleSubmit = values => {
    onSubmit(values)
    onCancel()
  }

  return (
    <Modal
      title={ <Title level={3}>Dar de alta invitados </Title> }
      open={visible}
      centered
      onCancel={onCancel}
      footer={null}
      width={383}>
      <Form
        requiredMark={false}
        layout="vertical"
        autoComplete="off"
        onFinish={handleSubmit}>
        <Form.Item
          name="familyName"
          label="Nombre de la familia"
          rules={[{ required: true, message: "Por favor ingresa el nombre de la familia" }]}
          colon={false}>
          <Input placeholder="Familia Hernandez" />
        </Form.Item>
        <Form.Item
          name="numberGuests"
          label="Cantidad de invitados"
          rules={[{ required: true, message: "Por favor ingresa el número de invitados" }]}
          colon={false}>
          <Input type="number" placeholder="2" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Número de contacto"
          rules={[{ required: true, message: "Por favor ingresa el número de contacto" }]}
          colon={false}>
          <Input placeholder="6394650090" />
        </Form.Item>
        <Form.Item>
          <Flex justify="end" gap={10}>
            <Button type="default" onClick={onCancel}>
              Cancelar
            </Button>
            <Button htmlType="submit">
              Crear evento
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default InvitateGuestModal
