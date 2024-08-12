import React, { useState } from "react"
import { Button, Modal, Form, Input } from "antd"

const Recovery = () => {
  const [visible, setVisible] = useState(true)

  const handleCancel = () => setVisible(false)

  const handleSubmit = () => {
    setVisible(false)
  }

  return (
    <Modal
      className="modal-update-password"
      title={
        <div className="tittle-modal">
          Recuperación de contraseña
        </div>
      }
      visible={visible}
      centered
      onCancel={handleCancel}
      footer={null}
      width={412}
      style={{ top: 20 }}>
      <Form
        style={{ padding:"1rem" }}
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
            <Button type="default" onClick={handleCancel}>
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