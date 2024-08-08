import React, { useState } from "react"
import { Button, Modal, Form, Input } from "antd"

const Recovery = () => {
  const [visible, setVisible] = useState(true)

  const handleCancel = () => {
    setVisible(false)
  }

  const handleOk = () => {
    setVisible(false)
    console.log("Formulario enviado")
  }

  return (
    <Modal
      title="Recuperación de contraseña"
      visible={open}
      centered={true}
      onCancel={handleCancel}
      footer={null}
      width={412}
      style={{ top: 20 }}>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{
          remember: true
        }}
        autoComplete="off"
        onFinish={handleOk}>
        <Form.Item
          label="Nueva contraseña"
          name="new_password"
          rules={[
            {
              message: "Por favor introduce tu nueva contraseña!"
            }
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirmar contraseña"
          name="password_confirmation"
          rules={[
            {
              message: "Por favor confirma tu contraseña!"
            }
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Button type="default" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button style={{ backgroundColor: "#17202a", color: "white" }} htmlType="submit">
              Enviar
            </Button>

          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Recovery