import React from "react"
import { Button, Modal, Form, Input } from "antd"

const Recovery = ({ visible, onCancel }) => {
  const handleSubmit = values => {
    console.log("Datos enviados:", values)
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
      width={412}
      style={{ top: 20 }}>
      <Form
        layout="vertical"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleSubmit}>
        <Form.Item
          label="Nueva contraseña"
          name="new_password"
          rules={[{ message: "Por favor introduce tu nueva contraseña!" }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirmar contraseña"
          name="password_confirmation"
          rules={[{ message: "Por favor confirma tu contraseña!" }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item  className="form-buttons">
          <div className="content-buttons">
            <Button type="default" onClick={onCancel}>
              Cancelar
            </Button>
            <Button className="button-style" htmlType="submit">
              Enviar
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Recovery