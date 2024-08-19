import React from "react"
import { Button, Modal, Form, Input } from "antd"
import { WhatsAppOutlined } from "@ant-design/icons"

const Recovery = ({ visible, onCancel, onSubmit }) => {
  const handleSubmit = values => {
    values
    onSubmit()
    onCancel()
  }

  return (
    <Modal
      className="modal-update-password"
      title={
        <div className="title-modal">
          Recuperación de contraseña
        </div>
      }
      open={visible}
      centered
      onCancel={onCancel}
      footer={null}
      width={412}>
      <Form
        requiredMark={false}
        className="form-recovery"
        layout="vertical"
        autoComplete="off"
        onFinish={handleSubmit}>
        <Form.Item
          name="phone"
          label="Número de teléfono"
          rules={[
            { required: true, message: "Por favor ingresa tu número de teléfono" },
            { pattern: /^\d{10}$/, message: "El número de teléfono debe tener exactamente 10 dígitos" }
          ]}
          colon={false}>
          <Input
            prefix={<WhatsAppOutlined />}
            placeholder="WhatsApp"
            type="text" />
        </Form.Item>
        <Form.Item>
          <div className="content-buttons">
            <Button type="default" onClick={onCancel}>
              Cancelar
            </Button>
            <Button htmlType="submit">
              Recuperar contraseña
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Recovery
