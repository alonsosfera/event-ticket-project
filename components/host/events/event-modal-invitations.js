import React from "react"
import { Button, Modal, Form, Input, Flex, Divider, Typography, InputNumber } from "antd"

const { Title } = Typography


const InvitateGuestModal = ({ visible, onCancel, onSubmit }) => {
  const handleSubmit = values => {
    onSubmit(values)
    onCancel()
  }

  return (
    <Modal
      open={visible}
      centered
      onCancel={onCancel}
      footer={null}
      width={383}>
      <Title level={3}>Dar de alta invitados</Title>
      <Divider style={{ background: "black", margin: "0px 0px 20px 0px" }} />
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
          <InputNumber style={{ width: "100%" }}  placeholder="2" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Número de contacto"
          rules={[
            { required: true, message: "Por favor ingresa el número de teléfono" },
            { pattern: /^\d{10}$/, message: "El número de teléfono debe tener exactamente 10 dígitos" }
          ]}
          colon={false}>
          <Input placeholder="WhatsApp" />
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
