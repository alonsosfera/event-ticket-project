import React from "react"
import { Button, Modal, Form, Input, Divider, Typography, InputNumber } from "antd"

const { Title } = Typography

const InvitateGuestModal = ({ visible, onCancel, onSubmit }) => {
  const [form] = Form.useForm()

  const handleSubmit = values => {
    onSubmit(values)
    form.resetFields()
  }

  const handleCancel = () => {
    form.resetFields()
    onCancel()
  }

  return (
    <Modal
      open={visible}
      centered
      onCancel={handleCancel}
      footer={null}
      width={383}>
      <Title level={3}>Dar de alta invitados</Title>
      <Divider style={{ background: "black", margin: "0px 0px 20px 0px" }} />
      <Form
        form={form}
        requiredMark={false}
        layout="vertical"
        autoComplete="off"
        onFinish={handleSubmit}>
        <Form.Item
          name="familyName"
          label="Nombre de la familia"
          rules={[{ required: true, message: "Por favor ingresa el nombre de la familia" }]}>
          <Input placeholder="Familia Hernandez" />
        </Form.Item>
        <Form.Item
          name="numberGuests"
          label="Cantidad de invitados"
          rules={[{ required: true, message: "Por favor ingresa el número de invitados" }]}>
          <InputNumber style={{ width: "100%" }} placeholder="0" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Número de contacto"
          rules={[
            { required: true, message: "Por favor ingresa el número de teléfono" },
            { pattern: /^\d{10}$/, message: "El número de teléfono debe tener exactamente 10 dígitos" }
          ]}>
          <Input placeholder="WhatsApp" />
        </Form.Item>
        <Form.Item>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Button type="default" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button htmlType="submit">
              Invitar
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default InvitateGuestModal
